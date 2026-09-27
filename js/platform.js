/* Which device and browser this is, and — when the app can't hear you — the exact steps to let
   it use the microphone on that system. Everything here is advice text: nothing depends on the
   guess being right, it only decides which instructions to show. */
HS.platform = (function () {
  var el = HS.util.el;
  var APP = 'HomeStudy';
  var ua = navigator.userAgent || '';
  var touch = navigator.maxTouchPoints || 0;

  var os = (function () {
    if (/iPhone|iPod/.test(ua)) return 'iphone';
    if (/iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1)) return 'ipad';
    if (/Android/.test(ua)) return 'android';
    if (/CrOS/.test(ua)) return 'chromeos';
    if (/Macintosh|Mac OS X/.test(ua)) return 'mac';
    if (/Windows/.test(ua)) return 'windows';
    if (/Linux|X11/.test(ua)) return 'linux';
    return 'other';
  })();

  /* On iPhone and iPad every browser is Safari underneath, but each one asks for the
     microphone on its own, so the browser still matters. */
  var browser = (function () {
    if (/FxiOS|Firefox\//.test(ua)) return 'firefox';
    if (/Edg(iOS|A)?\/|Edge\//.test(ua)) return 'edge';
    if (/SamsungBrowser\//.test(ua)) return 'samsung';
    if (/OPiOS|OPR\//.test(ua)) return 'opera';
    if (/CriOS|Chrome\//.test(ua)) return 'chrome';
    if (/Safari\//.test(ua)) return 'safari';
    return 'other';
  })();

  var installed = (function () {
    if (navigator.standalone) return true;                       // iPhone/iPad home screen
    if (!window.matchMedia) return false;
    return matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches;
  })();

  var apple = os === 'iphone' || os === 'ipad';
  /* A home-screen app on iPhone sends a UA with no browser token at all — it is still Safari. */
  if (apple && browser === 'other') browser = 'safari';
  var BROWSERS = { safari: 'Safari', chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox',
                   samsung: 'Samsung Internet', opera: 'Opera', other: 'this browser' };
  var DEVICES = { iphone: 'iPhone', ipad: 'iPad', android: 'Android', mac: 'Mac',
                  windows: 'Windows', chromeos: 'Chromebook', linux: 'Linux', other: 'this device' };

  function browserName() { return BROWSERS[browser]; }
  function deviceName() { return DEVICES[os]; }
  /** "iPhone · Safari" or "iPhone · added to the Home Screen" — for the Settings screen. */
  function label() {
    return deviceName() + ' · ' + (installed ? 'installed as an app' : browserName());
  }

  /* ---------- how to let the app use the microphone, here ---------- */

  /* The address-bar control that holds a site's permissions, by browser. */
  function siteControl() {
    if (apple) return 'the “aA” button at the left of the address bar → Website Settings';
    if (browser === 'firefox') return 'the padlock at the left of the address bar';
    if (browser === 'samsung') return 'the padlock at the left of the address bar → Permissions';
    return 'the icon at the left of the address bar (a padlock, sliders or ⓘ) → Permissions';
  }

  /**
   * What to do about the microphone here.
   * opts.words — the microphone itself is working and only the words are missing, so the steps
   * about recognition come first instead of the steps about permission.
   * Returns { device, steps, notes }.
   */
  function mic(opts) {
    opts = opts || {};
    var steps = [], notes = [];
    /* tag: 'permission' (let the page use the mic) or 'words' (turn sound into words). */
    function step(tag, text) { steps.push({ tag: tag, text: text }); }

    if (apple) {
      if (installed) {
        step('permission', 'Reopen the app and tap Allow when it asks for the microphone. An app added to the Home Screen asks separately from Safari.');
        step('permission', 'If it never asks — you said No once, and it won’t ask twice: remove the icon from the Home Screen, open the site in Safari, allow the microphone there, then add it to the Home Screen again.');
      } else {
        step('permission', 'Reload the page and tap Allow when ' + browserName() + ' asks for the microphone.');
        step('permission', 'Settings → ' + browserName() + ' → Microphone → set it to Ask or Allow. On Deny you are never asked.');
        step('permission', 'Or tap ' + siteControl() + ' → Microphone → Allow for this site.');
      }
      step('words', 'Settings → General → Keyboard → Enable Dictation — turn it ON. This is the usual one: ' + deviceName() + ' speech recognition is switched off with it, so the app hears you but never gets any words.');
      step('permission', 'Settings → Privacy & Security → Microphone → turn on ' + browserName() + '.');
      if (browser !== 'safari') notes.push('On ' + deviceName() + ', only Safari reliably turns speech into words — other browsers often can’t at all.');
      notes.push('Recognition on ' + deviceName() + ' may need an internet connection, and a Bluetooth headset or car kit can quietly take over as the microphone.');

    } else if (os === 'android') {
      if (installed) {
        step('permission', 'Settings → Apps → ' + APP + ' → Permissions → Microphone → Allow.');
        step('permission', 'If the app never asks, uninstall the icon, open the site in ' + browserName() + ', allow the microphone there, then install it again.');
      } else {
        step('permission', 'Tap ' + siteControl() + ' → Microphone → Allow, then reload the page.');
      }
      step('permission', 'Settings → Apps → ' + browserName() + ' → Permissions → Microphone → Allow.');
      step('permission', 'Settings → Privacy → Permission manager → Microphone — check ' + browserName() + ' is allowed, and that microphone access isn’t switched off for everything.');
      /* On Android the microphone usually works while the words never arrive, because the words
         come from Google's servers by way of a separate app on the phone. */
      step('words', 'Check you are online. Android sends the sound away to be turned into words — there is no offline mode for it, so with no connection nothing ever comes back, however well the microphone works.');
      step('words', 'Play Store → update Speech Services by Google, and the Google app. ' + browserName() + ' hands the listening to them.');
      step('words', 'Settings → Apps → Speech Services by Google → check it is enabled, and that it has the Microphone permission too.');
      step('words', 'Settings → Language and input (under System, or General management) → Voice input → set it to Speech Services by Google.');
      if (installed) step('words', 'Try the same page in ' + browserName() + ' itself rather than the installed icon — recognition is steadier there.');
      if (browser === 'firefox') notes.push('Firefox on Android can’t recognise words at all — use Chrome for the speaking exercises.');
      notes.push('Android may also want the language downloaded for voice typing: Gboard → Settings → Voice typing → Languages.');

    } else if (os === 'mac') {
      if (browser === 'safari') {
        step('permission', 'Safari → Settings → Websites → Microphone → set this site to Allow, then reload the page.');
      } else {
        step('permission', 'Click ' + siteControl() + ' → Microphone → Allow, then reload the page.');
      }
      step('permission', 'System Settings → Privacy & Security → Microphone → turn on ' + browserName() + '.');
      step('words', 'System Settings → Keyboard → Dictation — turn it on and accept the prompt. Recognition uses it.');
      step('permission', 'System Settings → Sound → Input — pick the right microphone and check its level moves when you talk.');
      if (browser === 'firefox') notes.push('Firefox can’t recognise words — use Safari or Chrome for the speaking exercises.');

    } else if (os === 'windows') {
      step('permission', 'Click ' + siteControl() + ' → Microphone → Allow, then reload the page.');
      step('permission', 'Settings → Privacy & security → Microphone — turn on “Microphone access” and “Let apps access your microphone”.');
      step('permission', 'In the same place, scroll down to “Let desktop apps access your microphone” and turn that on too — ' + browserName() + ' counts as one.');
      step('permission', 'Settings → System → Sound → Input — pick the right microphone and watch the test bar while you talk.');
      step('words', browserName() + ' turns speech into words over the internet, so check you have a connection.');
      if (browser === 'firefox') notes.push('Firefox can’t recognise words — use Chrome or Edge for the speaking exercises.');

    } else if (os === 'chromeos') {
      step('permission', 'Click ' + siteControl() + ' → Microphone → Allow, then reload the page.');
      step('permission', 'Settings → Privacy and security → Site settings → Microphone — check this site isn’t blocked and the right microphone is chosen.');
      step('permission', 'Settings → Device → Audio → Input — check the microphone isn’t muted.');
      step('words', 'Recognition happens over the internet, so check you have a connection.');

    } else {
      step('permission', 'Allow the microphone for this site in ' + browserName() + ' — ' + siteControl() + ' → Microphone → Allow — then reload the page.');
      step('permission', 'Check your system sound settings: the right microphone chosen, not muted, and its level moving when you talk.');
      step('words', 'Recognition happens over the internet in most browsers, so check you have a connection.');
    }

    notes.push('Only one thing at a time can use the microphone. Close other tabs, calls and recording apps, then try again.');

    /* The microphone is plainly working, so lead with the steps that turn sound into words. */
    var first = opts.words ? 'words' : 'permission';
    var ordered = steps.filter(function (x) { return x.tag === first; })
      .concat(steps.filter(function (x) { return x.tag !== first; }));
    return { device: label(), steps: ordered.map(function (x) { return x.text; }), notes: notes };
  }

  /** One sentence, for narration in talk mode and for reading out on a small screen. */
  function micHint() {
    if (apple) return 'On ' + deviceName() + ', allow the microphone for this app, and turn on Settings, General, Keyboard, Enable Dictation.';
    if (os === 'android') return 'On Android, allow the microphone for ' + (installed ? 'this app' : browserName()) + ' in Settings, Apps, Permissions.';
    if (os === 'mac') return 'On your Mac, allow the microphone for ' + browserName() + ' in System Settings, Privacy and Security, and turn on Dictation.';
    if (os === 'windows') return 'On Windows, allow the microphone for ' + browserName() + ', and in Settings, Privacy and security, Microphone.';
    if (os === 'chromeos') return 'On your Chromebook, allow the microphone for this site, and check the input in Settings, Device, Audio.';
    return 'Allow the microphone for this site, and check your system sound settings.';
  }

  /* ---------- where the voices live, on this system ---------- */

  /** Why a voice might be silent or missing here, and where to add one. */
  function voiceHint() {
    if (apple) {
      return 'No sound at all? Turn the volume up and flick the silent switch — then try Test again. '
        + 'Missing a language? Settings → Accessibility → Spoken Content → Voices → download the one you want.';
    }
    if (os === 'android') {
      return 'No sound at all? Turn the media volume up (not just the ringer). '
        + 'Missing a language? Settings → Accessibility → Text-to-speech output → Speech Services by Google → Install voice data.';
    }
    if (os === 'mac') {
      return 'No sound at all? Check the volume and the output device in System Settings → Sound. '
        + 'Missing a language? System Settings → Accessibility → Spoken Content → System Voice → Manage Voices.';
    }
    if (os === 'windows') {
      return 'No sound at all? Check the volume mixer and the output device. '
        + 'Missing a language? Settings → Time & language → Language & region → add the language, then Speech → Manage voices.';
    }
    if (os === 'chromeos') {
      return 'No sound at all? Check the volume. Missing a language? Settings → Accessibility → Text-to-Speech → Speech voices.';
    }
    return 'No sound at all? Check the volume and the output device. Voices come from the operating system, so add the language there.';
  }

  /**
   * The "how do I turn the microphone on here?" panel.
   * opts.test — include a button that checks the microphone on its own (don't use it inside
   * another button, like the talk-mode stage).
   */
  function micHelpNode(opts) {
    opts = opts || {};
    var info = mic(opts);
    var kids = [
      el('div.mic-help-head', { text: '🎤 Letting ' + APP + ' hear you on ' + info.device }),
      el('ol.mic-help-steps', {}, info.steps.map(function (s) { return el('li', { text: s }); })),
      el('div.mic-help-notes', {}, info.notes.map(function (s) { return el('p', { text: s }); }))
    ];
    if (opts.test) kids.push(micTestNode());
    if (opts.offSwitch) kids.push(giveUpNode(opts.offSwitch));
    if (opts.trace) kids.push(traceNode(opts.trace, !!opts.test));
    return el('div.mic-help', {}, kids);
  }

  /**
   * A microphone check that doesn't involve speech recognition at all: it just watches the
   * level. If this bar moves, the microphone works and the problem is recognition; if it
   * doesn't, the microphone itself is blocked or muted.
   */
  function micTestNode() {
    var bar = el('i');
    var meter = el('div.talk-meter', { style: { width: '100%' } }, [bar]);
    var out = el('div.mic-help-out', { text: 'Not sure which it is? Check the microphone on its own.' });
    var btn = el('button.btn.ghost.sm', { type: 'button', onclick: function () {
      if (btn.disabled) return;
      btn.disabled = true;
      meter.classList.add('on');
      out.textContent = 'Talk for a few seconds…';
      HS.speech.probe({ ms: 3000, level: function (v) { bar.style.width = Math.round(v * 100) + '%'; } })
        .then(function (r) {
          btn.disabled = false;
          meter.classList.remove('on');
          bar.style.width = '0%';
          out.textContent = r.ok ? worksButNoWords()
            : r.err === 'blocked' ? 'Blocked ✕ — the browser isn’t letting this page use the microphone. Start at step 1 above.'
            : r.err === 'none' ? 'No microphone found ✕ — check it’s plugged in or chosen as the input device.'
            : r.err === 'busy' ? 'Something else is using the microphone ✕ — close other tabs, calls and recording apps.'
            : r.err ? 'Couldn’t open the microphone ✕ — start at step 1 above.'
            : 'Didn’t pick anything up ✕ — the microphone is muted, too quiet, or the wrong input is chosen.';
        });
    } }, ['🎤 Check the microphone']);
    return el('div.mic-help-test', {}, [el('div.row', {}, [btn]), meter, out]);
  }

  /**
   * The way out. Some phones will not turn speech into words however the settings are arranged,
   * and a lesson you can't finish is worse than one that doesn't grade you. This switches
   * listening off for this device: you say the line out loud and tell the app you said it.
   */
  function giveUpNode(after) {
    var wrap = el('div.mic-help-give');
    wrap.appendChild(el('div.mic-help-out', { text: 'Tried all that and still nothing?' }));
    wrap.appendChild(el('button.btn.ghost.sm', { type: 'button', onclick: function () {
      HS.speech.setListening(false);
      wrap.textContent = '';
      wrap.appendChild(el('div.mic-help-out', {
        text: 'Listening is off on this ' + deviceName() + '. Speaking exercises now wait for you to say the line and tap “I said it”. Turn it back on any time in Settings → Microphone.' }));
      if (after) after();
    } }, ['Stop listening on this ' + deviceName()]));
    return wrap;
  }

  /**
   * Exactly what the recogniser did, in one line. Nobody needs to understand it: it is there so
   * an unexplained failure can be read out, or sent to someone who does.
   */
  function traceNode(text, withCopy) {
    var kids = [el('div.mic-help-out', { text: 'What happened last time:' }),
                el('div.mic-help-trace', { text: text })];
    if (withCopy && navigator.clipboard && navigator.clipboard.writeText) {
      var btn = el('button.link-btn', { type: 'button', onclick: function () {
        navigator.clipboard.writeText(text).then(
          function () { btn.textContent = 'Copied ✓'; },
          function () { btn.textContent = 'Couldn’t copy — select the line above instead'; });
      } }, ['Copy this line']);
      kids.push(btn);
    }
    return el('div.mic-help-why', {}, kids);
  }

  /* The microphone itself is fine, so recognition is what's failing — which means something
     different on each system. */
  function worksButNoWords() {
    var lead = 'The microphone works ✓ — it heard you. So it’s turning sound into words that’s failing. ';
    if (apple) return lead + 'On ' + deviceName() + ' that is almost always Settings → General → Keyboard → Enable Dictation being off' + (browser === 'safari' ? '.' : ', or this browser — try Safari.');
    if (os === 'android') return lead + 'On Android it runs over the internet, so check the connection' + (browser === 'chrome' ? '.' : ', and try Chrome.');
    if (os === 'mac') return lead + 'On your Mac, turn on System Settings → Keyboard → Dictation' + (browser === 'safari' || browser === 'chrome' ? '.' : ', and try Safari or Chrome.');
    return lead + 'It runs over the internet in ' + browserName() + ', so check the connection' + (browser === 'chrome' || browser === 'edge' ? '.' : ', and try Chrome or Edge.');
  }

  return { os: os, browser: browser, installed: installed, apple: apple,
           deviceName: deviceName, browserName: browserName, label: label,
           mic: mic, micHint: micHint, micHelpNode: micHelpNode, micTestNode: micTestNode,
           voiceHint: voiceHint };
})();
