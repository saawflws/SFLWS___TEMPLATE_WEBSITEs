/* ============================================================
 * main.js — showcase behaviour for sflwsts.aasimahmed.com
 *
 * The template list is NOT here. It lives in the generated root
 * data.js (loaded before this file) as TEMPLATES / FRAMEWORKS.
 *
 * To add or change a template, edit the source INDEX.md / META.md
 * files and run:  node scripts/build-data.js
 * Never hand-edit data.js. See RULES.md rule 3.
 * ============================================================ */

(function () {
  'use strict';

  /* ── config ────────────────────────────────────────────────
     root: "" because the site is served from a custom domain root.
     If it ever moves to username.github.io/repo-name, set this to
     "/repo-name" and everything else follows.
     ──────────────────────────────────────────────────────────── */
  var CONFIG = {
    title: 'sflwsts',
    headline: 'A quiet shelf of <em>hand-built</em> websites.',
    root: '',
    github: 'https://github.com/saawflws/SFLWS___TEMPLATE_WEBSITEs',
  };

  var SITES = typeof TEMPLATES !== 'undefined' ? TEMPLATES : [];

  var $ = function (s) { return document.querySelector(s); };
  var pad = function (n) { return String(n).padStart(2, '0'); };

  var ICON_COPY = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  var ICON_CHECK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 12l5 5L20 7"/></svg>';
  var ICON_GO = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>';

  var state = { q: '', cat: 'All' };
  var cards = [];

  /* Turn a category folder name into something readable:
     boutique_yoga_studio → Boutique Yoga Studio
     techYouTubers_home   → Tech YouTubers Home           */
  function label(slug) {
    return String(slug || 'misc')
      .replace(/[_-]+/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function catOf(site) { return site.category || 'misc'; }

  /* ── config → DOM ─────────────────────────────────────────── */
  document.title = CONFIG.title;
  $('#wordmark').innerHTML = CONFIG.title + '<span class="dot">.</span>';
  $('#heroLine').innerHTML = CONFIG.headline;
  $('#ghLink').href = CONFIG.github;
  $('#footLeft').textContent =
    '© ' + new Date().getFullYear() + ' ' + CONFIG.title + ' — built by hand, served flat.';

  var catList = [];
  SITES.forEach(function (s) {
    if (catList.indexOf(catOf(s)) === -1) catList.push(catOf(s));
  });

  $('#footRight').textContent =
    pad(SITES.length) + ' SITES · ' + pad(catList.length) + ' CATEGORIES · GENERATED FROM META.MD';

  /* ── chips ────────────────────────────────────────────────── */
  (function buildChips() {
    var box = $('#chips');

    function mk(value, text, count) {
      var b = document.createElement('button');
      b.className = 'chip' + (value === 'All' ? ' active' : '');
      b.dataset.cat = value;
      b.innerHTML = text + ' <span class="n">' + pad(count) + '</span>';
      b.addEventListener('click', function () {
        state.cat = value;
        box.querySelectorAll('.chip').forEach(function (c) {
          c.classList.toggle('active', c === b);
        });
        apply();
      });
      box.appendChild(b);
    }

    mk('All', 'All', SITES.length);
    catList.forEach(function (c) {
      mk(c, label(c), SITES.filter(function (s) { return catOf(s) === c; }).length);
    });
  })();

  /* ── cards ────────────────────────────────────────────────── */
  function initials(t) {
    return String(t)
      .split(/[\s—-]+/)
      .slice(0, 2)
      .map(function (w) { return w[0]; })
      .join('')
      .toUpperCase();
  }

  function makeCard(site, i) {
    var href = (CONFIG.root || '') + site.path;
    var num = pad(i + 1);

    var card = document.createElement('article');
    card.className = 'card';
    card.style.setProperty('--d', Math.min(i, 10) * 60 + 'ms');

    var thumb;
    if (site.thumb) {
      thumb = '<div class="thumb"><img src="' + site.thumb + '" alt="" loading="lazy">' +
              '<span class="go">' + ICON_GO + '</span></div>';
    } else if (site.preview === false) {
      thumb = '<div class="thumb tile"><span class="t-num">' + num + '</span>' +
              '<span class="t-mono">' + initials(site.title) + '</span></div>';
    } else {
      thumb = '<div class="thumb"><div class="frame"><iframe src="' + href +
              '" loading="lazy" tabindex="-1" title="' + site.title + ' — live preview"></iframe></div>' +
              '<span class="go">' + ICON_GO + '</span></div>';
    }

    card.innerHTML =
      thumb +
      '<div class="body">' +
        '<div class="row1">' +
          '<span class="num">' + num + '</span>' +
          '<h3 class="title">' + site.title + '</h3>' +
          '<span class="pill">' + label(catOf(site)) + '</span>' +
        '</div>' +
        (site.desc ? '<p class="desc">' + site.desc + '</p>' : '') +
        '<div class="row2">' +
          '<span class="path" title="' + href + '">' + site.path + '</span>' +
          '<span class="spacer"></span>' +
          '<button class="iconbtn copy" title="Copy full URL">' + ICON_COPY + '</button>' +
        '</div>' +
      '</div>' +
      '<a class="cover" href="' + href + '" target="_blank" rel="noopener" aria-label="Open ' + site.title + '"></a>';

    var copyBtn = card.querySelector('.copy');
    copyBtn.addEventListener('click', function () {
      try { navigator.clipboard.writeText(location.origin + href); } catch (e) {}
      copyBtn.innerHTML = ICON_CHECK;
      copyBtn.classList.add('ok');
      setTimeout(function () {
        copyBtn.innerHTML = ICON_COPY;
        copyBtn.classList.remove('ok');
      }, 1200);
    });

    /* measure the real page height once loaded → exact pan distance */
    var frame = card.querySelector('.frame');
    if (frame) {
      var ifr = frame.querySelector('iframe');
      ifr.addEventListener('load', function () {
        try {
          var d = ifr.contentDocument;
          var h = Math.max(d.documentElement.scrollHeight, d.body.scrollHeight);
          if (h > 900) {
            frame.style.height = h + 'px';
            ifr.style.height = h + 'px';
            layoutFrames();
          }
        } catch (e) {}
      });
    }

    card.addEventListener('animationend', function () {
      card.style.animation = 'none';
    }, { once: true });

    return card;
  }

  var grid = $('#grid');
  SITES.forEach(function (site, i) {
    var el = makeCard(site, i);
    grid.appendChild(el);
    cards.push({
      el: el,
      site: site,
      hay: [
        site.title,
        site.desc,
        label(catOf(site)),
        catOf(site),
        site.framework,
        (site.tags || []).join(' '),
        site.path,
      ].join(' ').toLowerCase(),
    });
  });

  requestAnimationFrame(function () {
    cards.forEach(function (c) { c.el.classList.add('in'); });
  });

  /* ── scale each iframe to its card, compute pan distance ──── */
  function layoutFrames() {
    cards.forEach(function (c) {
      if (c.el.classList.contains('hidden')) return;
      var frame = c.el.querySelector('.frame');
      if (!frame) return;
      var thumb = c.el.querySelector('.thumb');
      var s = thumb.clientWidth / 1280;
      var shift = Math.min(2600, Math.max(0, frame.offsetHeight * s - thumb.clientHeight));
      frame.style.setProperty('--s', s);
      frame.style.setProperty('--shift', shift);
      frame.style.setProperty('--pan', Math.min(6.5, Math.max(2.5, shift / 260)) + 's');
    });
  }

  var rAF;
  window.addEventListener('resize', function () {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(layoutFrames);
  });
  window.addEventListener('load', layoutFrames);

  /* ── search + filter ──────────────────────────────────────── */
  var qInput = $('#q');

  function apply() {
    var ql = state.q.trim().toLowerCase();
    var vis = 0;

    cards.forEach(function (c) {
      var ok = (state.cat === 'All' || catOf(c.site) === state.cat) &&
               (!ql || c.hay.indexOf(ql) !== -1);
      c.el.classList.toggle('hidden', !ok);
      if (ok) vis++;
    });

    $('#count').textContent = 'INDEX — ' + pad(vis) + '/' + pad(cards.length);
    $('#empty').style.display = vis ? 'none' : 'block';
    $('#emptyQ').textContent = state.q || label(state.cat);
    $('#resetBtn').hidden = !(ql || state.cat !== 'All');
    requestAnimationFrame(layoutFrames);
  }

  function resetAll() {
    state.q = '';
    state.cat = 'All';
    qInput.value = '';
    document.querySelectorAll('.chip').forEach(function (c) {
      c.classList.toggle('active', c.dataset.cat === 'All');
    });
    apply();
  }

  qInput.addEventListener('input', function () {
    state.q = qInput.value;
    apply();
  });
  $('#resetBtn').addEventListener('click', resetAll);
  $('#emptyReset').addEventListener('click', resetAll);

  /* ── keyboard: "/" or Ctrl/⌘+K to search ──────────────────── */
  window.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      qInput.focus();
    } else if (e.key === '/' && document.activeElement !== qInput) {
      e.preventDefault();
      qInput.focus();
    } else if (e.key === 'Escape' && document.activeElement === qInput) {
      if (qInput.value) {
        qInput.value = '';
        state.q = '';
        apply();
      } else {
        qInput.blur();
      }
    }
  });

  /* ── live clock ───────────────────────────────────────────── */
  function tick() {
    $('#clock').textContent = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  tick();
  setInterval(tick, 10000);

  apply();
})();
