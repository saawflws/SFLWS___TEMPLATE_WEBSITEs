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

  /* .thumb is aspect-ratio 16/10, so its height is 0.625x its width.
     Keep this in step with the .thumb rule in assets/styles/main.css. */
  var THUMB_RATIO = 10 / 16;

  /* Ten per page keeps the first paint to ten images and fills a couple of rows
     at common widths. Pagination runs over the FILTERED set, not the whole shelf. */
  var PAGE_SIZE = 10;

  var state = { q: '', cat: 'All', page: 1 };
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
        refilter();
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

    /* A static screenshot, not a live iframe. Nine embedded documents meant nine
       full websites running at once — WebGL, rAF loops and runtime Tailwind
       compilation in the background of a page nobody was looking at. The pan is
       preserved, as one composited image layer. Templates with no thumb.webp yet
       fall back to a typographic tile; run scripts/shoot-thumbs.js to give them one. */
    var thumb;
    if (site.thumb) {
      thumb = '<div class="thumb"><img class="shot" src="' + site.thumb +
              '" alt="' + site.title + ' — full page preview" loading="lazy" decoding="async">' +
              '<span class="go">' + ICON_GO + '</span></div>';
    } else {
      thumb = '<div class="thumb tile"><span class="t-num">' + num + '</span>' +
              '<span class="t-mono">' + initials(site.title) + '</span></div>';
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

    /* Pan distance, from the image's natural aspect ratio alone.
       The window is 16/10, so its height is 0.625x its width. The image is drawn
       at full card width, so its height is (natH/natW)x that. Travelling the
       difference, expressed as a share of the image's own height, is:
           1 - 0.625 * (natW / natH)
       No getBoundingClientRect, no clientWidth — nothing that forces layout. */
    var shot = card.querySelector('img.shot');
    if (shot) {
      var setPan = function () {
        var w = shot.naturalWidth;
        var h = shot.naturalHeight;
        if (!w || !h) return;
        var pct = (1 - (THUMB_RATIO * w) / h) * 100;
        if (pct <= 1) return; // image barely taller than the window: nothing to pan
        card.style.setProperty('--pan-pct', pct.toFixed(2));
        // longer pans get proportionally longer, within sane bounds
        card.style.setProperty('--pan', Math.min(7, Math.max(2.5, pct / 14)).toFixed(2) + 's');
      };
      if (shot.complete) setPan();
      else shot.addEventListener('load', setPan, { once: true });
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

  /* No layout pass here on purpose. The pan is expressed as a percentage of the
     image's own height, so it stays correct at any card width — nothing to
     recompute on resize, and no forced synchronous layout on filter or load. */

  /* ── search + filter ──────────────────────────────────────── */
  var qInput = $('#q');

  function apply() {
    var ql = state.q.trim().toLowerCase();

    /* 1. filter */
    var matched = [];
    cards.forEach(function (c) {
      var ok = (state.cat === 'All' || catOf(c.site) === state.cat) &&
               (!ql || c.hay.indexOf(ql) !== -1);
      if (ok) matched.push(c);
    });

    /* 2. paginate the matches */
    var total = matched.length;
    var pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (state.page > pages) state.page = pages;
    if (state.page < 1) state.page = 1;

    var first = (state.page - 1) * PAGE_SIZE;
    var shown = matched.slice(first, first + PAGE_SIZE);

    /* Toggle a class rather than re-rendering, so each card keeps the --pan-pct
       already computed from its image. */
    cards.forEach(function (c) { c.el.classList.add('hidden'); });
    shown.forEach(function (c) { c.el.classList.remove('hidden'); });

    /* 3. chrome */
    var range = total
      ? pad(first + 1) + '–' + pad(first + shown.length) + ' / ' + pad(total)
      : pad(0) + ' / ' + pad(0);
    $('#count').textContent = 'INDEX — ' + range;

    $('#pager').hidden = pages < 2;
    $('#pageInfo').textContent = 'PAGE ' + pad(state.page) + ' / ' + pad(pages);
    $('#prevBtn').disabled = state.page <= 1;
    $('#nextBtn').disabled = state.page >= pages;

    $('#empty').style.display = total ? 'none' : 'block';
    $('#emptyQ').textContent = state.q || label(state.cat);
    $('#resetBtn').hidden = !(ql || state.cat !== 'All');
  }

  /* Any change to what is being filtered puts you back on page one — staying on
     page 3 of a result set that now has one page is disorienting. */
  function refilter() {
    state.page = 1;
    apply();
  }

  function goToPage(n) {
    state.page = n;
    apply();
    var grid = $('#grid');
    if (grid.getBoundingClientRect().top < 0) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function resetAll() {
    state.q = '';
    state.cat = 'All';
    state.page = 1;
    qInput.value = '';
    document.querySelectorAll('.chip').forEach(function (c) {
      c.classList.toggle('active', c.dataset.cat === 'All');
    });
    apply();
  }

  qInput.addEventListener('input', function () {
    state.q = qInput.value;
    refilter();
  });

  $('#prevBtn').addEventListener('click', function () { goToPage(state.page - 1); });
  $('#nextBtn').addEventListener('click', function () { goToPage(state.page + 1); });
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
        refilter();
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
