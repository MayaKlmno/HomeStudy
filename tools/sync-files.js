#!/usr/bin/env node
/* Rewrites the script tags in index.html and the offline file list in sw.js from what is on disk,
   and bumps the cache version so installed copies update.

   node tools/sync-files.js                  # every track
   node tools/sync-files.js --without chinese
*/
'use strict';
var fs = require('fs'), path = require('path');
var root = path.join(__dirname, '..');
var skipAt = process.argv.indexOf('--without');
var skip = skipAt > 0 ? process.argv[skipAt + 1].split(',') : [];

var CORE = ['util', 'storage', 'speech', 'audio', 'staff', 'keyboard'];
var LANGS = ['french', 'japanese', 'chinese'].filter(function (l) { return skip.indexOf(l) === -1; });
var UI = ['exercises', 'engine', 'screens', 'app'];

function units(lang) {
  var dir = path.join(root, 'js', 'tracks', lang);
  return fs.readdirSync(dir).filter(function (f) { return /^u\d\d\.js$/.test(f); }).sort()
    .map(function (f) { return 'js/tracks/' + lang + '/' + f; });
}

var tag = function (src) { return '<script src="' + src + '"></script>'; };
var content = ['js/tracks/lang.js'];
LANGS.forEach(function (l) { content = content.concat(units(l), ['js/tracks/' + l + '/track.js']); });
content.push('js/tracks/piano/track.js');

var scripts = [
  '<!-- core -->', CORE.map(function (n) { return tag('js/' + n + '.js'); }).join('\n'), '',
  '<!-- content -->', content.map(tag).join('\n'), '',
  '<!-- ui -->', UI.map(function (n) { return tag('js/' + n + '.js'); }).join('\n')
].join('\n');

var indexPath = path.join(root, 'index.html');
var html = fs.readFileSync(indexPath, 'utf8');
var start = html.indexOf('<!-- core -->');
var end = html.indexOf(tag('js/app.js')) + tag('js/app.js').length;
html = html.slice(0, start) + scripts + html.slice(end);
fs.writeFileSync(indexPath, html);

var styles = fs.readdirSync(path.join(root, 'styles')).filter(function (f) { return /\.css$/.test(f); }).sort()
  .map(function (f) { return 'styles/' + f; });
var files = ['./', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png']
  .concat(CORE.map(function (n) { return 'js/' + n + '.js'; }), content,
          UI.map(function (n) { return 'js/' + n + '.js'; }), styles);

var swPath = path.join(root, 'sw.js');
var sw = fs.readFileSync(swPath, 'utf8');
var version = parseInt((sw.match(/homestudy-v(\d+)/) || [0, 0])[1], 10) + 1;
sw = sw.replace(/homestudy-v\d+/, 'homestudy-v' + version)
       .replace(/var FILES = \[[\s\S]*?\];/, 'var FILES = [\n' + files.map(function (f) { return '  "' + f + '"'; }).join(',\n') + '\n];');
fs.writeFileSync(swPath, sw);

var missing = files.filter(function (f) { return f !== './' && !fs.existsSync(path.join(root, f)); });
console.log('index.html: ' + content.length + ' content scripts; sw.js: ' + files.length + ' files, cache v' + version);
if (missing.length) { console.log('MISSING: ' + missing.join(', ')); process.exit(1); }
