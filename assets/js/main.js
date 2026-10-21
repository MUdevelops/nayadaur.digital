(function () {
  'use strict';
  var d = document;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

  /* ---- mobile menu + services submenu ---- */
  var toggle = $('.nav__toggle'), menu = $('#site-nav'), header = $('.site-header');
  function setMenu(open) {
    if (!toggle) return;
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (toggle) {
    toggle.addEventListener('click', function () { setMenu(!menu.classList.contains('is-open')); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
    });
    d.addEventListener('pointerdown', function (e) {
      if (menu.classList.contains('is-open') && !header.contains(e.target)) setMenu(false);
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });
  }
  $$('.sub-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var li = b.parentNode, open = !li.classList.contains('is-open');
      li.classList.toggle('is-open', open);
      b.setAttribute('aria-expanded', open);
    });
  });

  /* ---- one subtle fade-up entrance (failsafe in CSS) ---- */
  var rv = $$('.rv');
  if (rv.length) {
    if (!('IntersectionObserver' in window) || reduce) { rv.forEach(function (e) { e.classList.add('in'); }); }
    else {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      rv.forEach(function (e) { io.observe(e); });
    }
  }


  /* ---- v2 polish: sticky shadow, back-to-top, WhatsApp float, stat counters, hero parallax ---- */
  var up = d.createElement('button');
  up.type = 'button'; up.className = 'to-top'; up.setAttribute('aria-label', 'Back to top');
  up.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>';
  up.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  d.body.appendChild(up);
  if (!$('.wa-float')) {
    var w = d.createElement('a');
    w.className = 'wa-float'; w.target = '_blank'; w.rel = 'noopener';
    w.href = 'https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20madad%20chahiye.';
    w.setAttribute('aria-label', 'Chat with NayaDaur Digital on WhatsApp');
    w.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>';
    d.body.appendChild(w);
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (header) header.classList.toggle('is-stuck', y > 8);
      up.classList.toggle('show', y > 600);
      ticking = false;
    });
  }, { passive: true });
  $$('[data-count]').forEach(function (el) {
    var to = parseInt(el.getAttribute('data-count'), 10);
    if (reduce || !('IntersectionObserver' in window)) return;
    el.textContent = '0';
    var o = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; o.disconnect();
      var t0 = performance.now();
      (function tick(t) {
        var p = Math.min((t - t0) / 1200, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }, { threshold: 0.6 });
    o.observe(el);
  });
  var orb = $('.orb');
  if (orb && !reduce && window.matchMedia('(hover:hover)').matches) {
    $('.hero2').addEventListener('mousemove', function (e) {
      var r = this.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      orb.style.transform = 'translate(' + (x * 14) + 'px,' + (y * 10) + 'px)';
    });
  }


  /* ---- falling Urdu words in hero ---- */
  var fall = $('[data-falling]');
  if (fall) {
    var FALLING_WORDS = ['کاروبار','کامیابی','ترقی','نیا دور','ڈیجیٹل','سوچ','بہتر','اعتماد','منافع','گاہک','دکان','آن لائن'];
    var n = window.innerWidth < 600 ? 10 : 20;
    fall.style.setProperty('--h', (fall.offsetHeight + 90) + 'px');
    for (var k = 0; k < n; k++) {
      var sp = d.createElement('span');
      sp.className = 'fw'; sp.setAttribute('aria-hidden', 'true');
      sp.textContent = FALLING_WORDS[k % FALLING_WORDS.length];
      sp.style.left = (Math.random() * 94) + '%';
      sp.style.fontSize = (1.1 + Math.random() * 1.6).toFixed(2) + 'rem';
      sp.style.setProperty('--o', (0.12 + Math.random() * 0.14).toFixed(2));
      sp.style.setProperty('--dx', (Math.random() * 60 - 30).toFixed(0) + 'px');
      sp.style.setProperty('--t', (Math.random() * 80).toFixed(0) + '%');
      sp.style.animationDuration = (11 + Math.random() * 12).toFixed(1) + 's';
      sp.style.animationDelay = (-Math.random() * 20).toFixed(1) + 's';
      fall.appendChild(sp);
    }
  }

  /* ---- portfolio filter ---- */
  var tabs = $$('[data-filter]');
  if (tabs.length) {
    var status = $('#pf-status');
    tabs.forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-filter'), shown = 0;
        tabs.forEach(function (t) { t.setAttribute('aria-pressed', t === b); });
        $$('#pf-grid .pf').forEach(function (fig) {
          var show = f === 'all' || fig.getAttribute('data-cat') === f;
          fig.hidden = !show; if (show) shown++;
        });
        if (status) status.textContent = 'Showing ' + shown + (shown === 1 ? ' sample' : ' samples');
      });
    });
  }

  /* ---- lightbox ---- */
  var lbData = $('#lb-data');
  if (lbData) {
    var items = JSON.parse(lbData.textContent), box = null, idx = 0, opener = null;
    var render = function () {
      var it = items[idx];
      $('img', box).src = it.src; $('img', box).alt = it.alt;
      $('img', box).width = it.w; $('img', box).height = it.h;
      $('figcaption', box).textContent = it.cap + ' (' + (idx + 1) + ' of ' + items.length + ')';
    };
    var close = function () {
      if (!box) return;
      d.removeEventListener('keydown', onKey); box.remove(); box = null; d.body.style.overflow = '';
      if (opener) opener.focus();
    };
    var step = function (k) { idx = (idx + k + items.length) % items.length; render(); };
    var onKey = function (e) {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'Tab') {
        var f = $$('button', box), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    d.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lb]');
      if (!b) return;
      opener = b; idx = Math.max(0, items.findIndex(function (x) { return String(x.n) === b.getAttribute('data-lb'); }));
      box = d.createElement('div');
      box.className = 'lightbox'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Image viewer');
      box.innerHTML = '<button type="button" class="lightbox__close" aria-label="Close image viewer">&times;</button><button type="button" class="lb-prev" aria-label="Previous image">&#8249;</button><figure class="lightbox__fig"><img alt=""><figcaption></figcaption></figure><button type="button" class="lb-next" aria-label="Next image">&#8250;</button>';
      d.body.appendChild(box); d.body.style.overflow = 'hidden'; render();
      $('.lightbox__close', box).focus();
      box.addEventListener('click', function (ev) {
        if (ev.target.closest('.lightbox__close') || !ev.target.closest('.lightbox__fig, button')) close();
        else if (ev.target.closest('.lb-prev')) step(-1);
        else if (ev.target.closest('.lb-next')) step(1);
      });
      d.addEventListener('keydown', onKey);
    });
  }

  /* ---- contact form: builds a WhatsApp / email message in the browser ---- */
  var form = $('#lead-form');
  if (form) {
    var WA = '923219211464', MAIL = 'info@nayadaur.digital';
    var f = form.elements, edited = false, status2 = $('#lf-status');
    function build() {
      var n = f.name.value.trim() || '[Name]', b = f.business.value.trim() || '[Business]', c = f.city.value.trim() || '[City]';
      var s = f.service.value, det = f.details.value.trim(), x = f.budget.value ? ' Budget: ' + f.budget.value + '.' : '';
      if (f.language.value === 'en') return 'Hello NayaDaur Digital! My name is ' + n + '. My business is ' + b + ' (' + c + '). I need: ' + s + '.' + (det ? ' ' + det + '.' : '') + x + ' Please get in touch.';
      if (f.language.value === 'ur') return 'السلام علیکم نیا دور ڈیجیٹل! میرا نام ' + n + ' ہے۔ میرا کاروبار ' + b + ' (' + c + ') ہے۔ مجھے ' + s + ' چاہیے۔' + (det ? ' ' + det + '۔' : '') + x + ' مہربانی کر کے رابطہ کریں۔';
      return 'Assalam o Alaikum NayaDaur Digital! Mera naam ' + n + ' hai. Mera business ' + b + ' hai (' + c + '). Mujhe ' + s + ' chahiye.' + (det ? ' ' + det + '.' : '') + x + ' Meherbani kar ke rabta karein.';
    }
    function refresh() { if (!edited) f.message.value = build(); }
    var q = new URLSearchParams(location.search).get('service');
    if (q) { for (var i = 0; i < f.service.options.length; i++) if (f.service.options[i].value === q) f.service.selectedIndex = i; }
    ['name', 'business', 'service', 'budget', 'city', 'details', 'language'].forEach(function (k) {
      f[k].addEventListener('input', function () { edited = false; refresh(); if (status2) status2.textContent = ''; });
    });
    f.message.addEventListener('input', function () { edited = true; $('#lf-message-err').textContent = ''; f.message.removeAttribute('aria-invalid'); });
    refresh();
    function valid() {
      var ok = true;
      if (!f.name.value.trim()) { $('#lf-name-err').textContent = 'Please enter your name.'; f.name.setAttribute('aria-invalid', 'true'); f.name.focus(); ok = false; }
      else { $('#lf-name-err').textContent = ''; f.name.removeAttribute('aria-invalid'); }
      if (ok && !f.message.value.trim()) { $('#lf-message-err').textContent = 'Message cannot be empty.'; f.message.setAttribute('aria-invalid', 'true'); f.message.focus(); ok = false; }
      return ok;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valid()) return;
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(f.message.value), '_blank', 'noopener');
      status2.textContent = 'WhatsApp opened with your message. Press send there.';
    });
    $('[data-send="mail"]', form).addEventListener('click', function () {
      if (!valid()) return;
      location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Enquiry: ' + f.service.value) + '&body=' + encodeURIComponent(f.message.value);
      status2.textContent = 'Your email app should open with the message ready to send.';
    });
    $('[data-copy]', form).addEventListener('click', function () {
      var ok = function () { status2.textContent = 'Message copied'; };
      var fail = function () { f.message.select(); status2.textContent = 'Copy not supported. Please copy the selected text manually.'; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(f.message.value).then(ok, fail); else fail();
    });
  }
})();
