/* NayaDaur Digital - client testimonials (home page)
   Shows only reviews marked approved:true in /assets/testimonials.json.
   Optional fields per review: role (service tag), avatar (image path).
   Optional side visual: /assets/images/testimonials-visual.webp (hidden automatically if the file is missing).
   Sits between #contact-now and the CTA band; hidden when there are no approved reviews. */
(function () {
  'use strict';
  var JSON_URL = '/assets/testimonials.json?v=3';
  var VISUAL = '/assets/images/testimonials-visual.webp?v=1';
  var reviews = null, loading = false;
  var AUTO = 7000;

  var css = '' +
  '.tst{position:relative;background:linear-gradient(180deg,#F4F8FC 0,var(--cream,#F8F5EC) 100%);padding:var(--sec,64px) 0;overflow:hidden}' +
  '.tst__grid{display:grid;gap:clamp(28px,5vw,56px);align-items:center}' +
  '.tst__intro h2{margin:0 0 12px}' +
  '.tst__intro>p{margin:0 0 22px;color:var(--muted,#46546A);max-width:44ch}' +
  '.tst__score{display:inline-flex;align-items:center;gap:14px;padding:10px 18px 10px 14px;border:1px solid rgba(11,25,44,.1);border-radius:999px;background:#fff;box-shadow:0 6px 18px rgba(11,25,44,.06)}' +
  '.tst__score b{font:700 1.7rem/1 var(--font-h,inherit);color:var(--g,#0B192C)}' +
  '.tst__score span{display:block;font-size:.82rem;line-height:1.3;color:var(--muted,#46546A)}' +
  '.tst__score .tst__stars{margin:0 0 2px}' +
  '.tst__visual{margin:26px 0 0;position:relative}' +
  '.tst__visual img{display:block;width:100%;height:auto;border-radius:20px}' +
  '.tst__visual[hidden]{display:none}' +
  '.tst__box{position:relative;min-width:0}' +
  '.tst__card{position:relative;background:#fff;border:1px solid rgba(11,25,44,.08);border-radius:22px;box-shadow:0 24px 60px rgba(11,25,44,.12);padding:clamp(26px,4.5vw,46px);overflow:hidden}' +
  '.tst__card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:5px;background:linear-gradient(180deg,var(--lime,#38BDF8),var(--g,#0B192C))}' +
  '.tst__mark{position:absolute;right:clamp(18px,4vw,36px);top:clamp(6px,2vw,16px);width:clamp(54px,9vw,84px);height:auto;fill:var(--lime,#38BDF8);opacity:.16;pointer-events:none}' +
  '.tst__track{display:grid;position:relative}' +
  '.tst__slide{grid-area:1/1;margin:0;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .5s ease,transform .5s ease,visibility .5s;display:flex;flex-direction:column;gap:22px}' +
  '.tst__slide.is-on{opacity:1;visibility:visible;transform:none}' +
  '.tst__stars{display:flex;gap:3px;color:#F5B301;margin:0}' +
  '.tst__stars svg{width:18px;height:18px;fill:currentColor}' +
  '.tst__text{margin:0;font:500 clamp(1.05rem,2.1vw,1.28rem)/1.65 var(--font-h,inherit);color:var(--ink,#0F1B2D);max-width:60ch}' +
  '.tst__who{display:flex;align-items:center;gap:14px;padding-top:20px;border-top:1px solid var(--line,#E2DDCC)}' +
  '.tst__av{flex:none;width:52px;height:52px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 3px #fff,0 0 0 4px rgba(11,25,44,.14)}' +
  '.tst__ini{display:grid;place-items:center;background:linear-gradient(135deg,var(--g,#0B192C),#17406B);color:#fff;font:600 1.05rem/1 var(--font-h,inherit);letter-spacing:.02em}' +
  '.tst__name{display:block;font:600 1.05rem/1.3 var(--font-h,inherit);color:var(--g,#0B192C)}' +
  '.tst__role{display:inline-block;margin-top:4px;padding:3px 10px;border-radius:999px;background:rgba(56,189,248,.14);color:#0A5E8C;font:600 .76rem/1.4 var(--font,inherit)}' +
  '.tst__verified{margin-left:auto;display:inline-flex;align-items:center;gap:6px;color:var(--muted,#46546A);font-size:.8rem;white-space:nowrap}' +
  '.tst__verified svg{width:16px;height:16px;fill:none;stroke:#16A34A;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}' +
  '.tst__bar{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(11,25,44,.06)}' +
  '.tst__bar i{display:block;height:100%;width:0;background:var(--lime,#38BDF8)}' +
  '.tst__bar.run i{width:100%;transition:width '+AUTO+'ms linear}' +
  '.tst__nav{display:flex;align-items:center;gap:12px;margin-top:20px;flex-wrap:wrap}' +
  '.tst__thumbs{display:flex;gap:8px;flex-wrap:wrap;flex:1;min-width:0}' +
  '.tst__thumb{width:42px;height:42px;padding:0;border-radius:50%;border:0;background:none;cursor:pointer;opacity:.55;transition:opacity .2s,transform .2s,box-shadow .2s;box-shadow:0 0 0 2px transparent}' +
  '.tst__thumb .tst__av,.tst__thumb .tst__ini{width:42px;height:42px;box-shadow:none;font-size:.85rem}' +
  '.tst__thumb:hover{opacity:.9}' +
  '.tst__thumb[aria-current="true"]{opacity:1;box-shadow:0 0 0 2px #fff,0 0 0 4px var(--lime,#38BDF8);transform:scale(1.06)}' +
  '.tst__btns{display:flex;gap:8px}' +
  '.tst__btn{width:42px;height:42px;border-radius:50%;border:1px solid rgba(11,25,44,.14);background:#fff;color:var(--g,#0B192C);cursor:pointer;display:grid;place-items:center;transition:background .2s,color .2s,border-color .2s}' +
  '.tst__btn:hover,.tst__btn:focus-visible{background:var(--g,#0B192C);color:#fff;border-color:var(--g,#0B192C)}' +
  '.tst__btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}' +
  '.tst__thumb:focus-visible,.tst__box:focus-visible{outline:2px solid var(--lime,#38BDF8);outline-offset:3px}' +
  '.tst--single .tst__nav,.tst--single .tst__bar{display:none}' +
  '@media (min-width:900px){.tst__grid{grid-template-columns:minmax(0,5fr) minmax(0,7fr)}}' +
  '@media (max-width:560px){.tst__verified{display:none}.tst__thumb,.tst__thumb .tst__av,.tst__thumb .tst__ini{width:38px;height:38px}}' +
  '@media (prefers-reduced-motion:reduce){.tst__slide{transition:none;transform:none}.tst__bar{display:none}}';

  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z"/></svg>';
  var ARROW_L = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  var ARROW_R = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  var QUOTE = '<svg class="tst__mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M4 28c0-10 5-17 15-20l2 4c-5 2-8 5-8 9h7v15H4zM27 28c0-10 5-17 15-20l2 4c-5 2-8 5-8 9h7v15H27z"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function ini(n) { var p = String(n).trim().split(/\s+/); return ((p[0] || '')[0] || '').toUpperCase() + (p.length > 1 ? (p[p.length - 1][0] || '').toUpperCase() : ''); }
  function avatar(r) {
    return r.avatar
      ? '<img class="tst__av" src="' + esc(r.avatar) + '" width="52" height="52" alt="" loading="lazy" decoding="async">'
      : '<span class="tst__av tst__ini" aria-hidden="true">' + esc(ini(r.name)) + '</span>';
  }

  function build(list) {
    var sec = document.createElement('section');
    sec.className = 'tst' + (list.length === 1 ? ' tst--single' : '');
    sec.id = 'testimonials';
    sec.setAttribute('aria-labelledby', 'tst-t');
    var five = new Array(6).join(STAR);
    var slides = list.map(function (r, i) {
      return '<figure class="tst__slide' + (i === 0 ? ' is-on' : '') + '" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' of ' + list.length + '">' +
        '<div class="tst__stars" role="img" aria-label="5 out of 5 stars">' + five + '</div>' +
        '<blockquote class="tst__text">' + esc(r.text) + '</blockquote>' +
        '<figcaption class="tst__who">' + avatar(r) +
        '<span><span class="tst__name">' + esc(r.name) + '</span>' + (r.role ? '<span class="tst__role">' + esc(r.role) + '</span>' : '') + '</span>' +
        '<span class="tst__verified">' + CHECK + 'Client review</span></figcaption></figure>';
    }).join('');
    var thumbs = list.map(function (r, i) {
      return '<button type="button" class="tst__thumb" aria-label="Show review from ' + esc(r.name) + '"' + (i === 0 ? ' aria-current="true"' : '') + '>' + avatar(r) + '</button>';
    }).join('');
    sec.innerHTML = '<div class="container"><div class="tst__grid">' +
      '<div class="tst__intro"><span class="eyebrow">Client feedback</span><h2 id="tst-t">What our clients say</h2>' +
      '<p>Real projects, honest feedback. Here is how it feels to work with NayaDaur Digital.</p>' +
      '<div class="tst__score"><b>5.0</b><div><div class="tst__stars" aria-hidden="true">' + five + '</div><span>from ' + list.length + ' client reviews</span></div></div>' +
      '<figure class="tst__visual"><img src="' + VISUAL + '" alt="" width="1200" height="800" decoding="async"></figure></div>' +
      '<div class="tst__box" role="region" aria-roledescription="carousel" aria-label="Client reviews">' +
      '<div class="tst__card">' + QUOTE + '<div class="tst__track" aria-live="polite">' + slides + '</div><div class="tst__bar" aria-hidden="true"><i></i></div></div>' +
      '<div class="tst__nav"><div class="tst__thumbs">' + thumbs + '</div>' +
      '<div class="tst__btns"><button type="button" class="tst__btn" data-d="-1" aria-label="Previous review">' + ARROW_L + '</button>' +
      '<button type="button" class="tst__btn" data-d="1" aria-label="Next review">' + ARROW_R + '</button></div></div>' +
      '</div></div></div>';
    var vis = sec.querySelector('.tst__visual'), im = vis.querySelector('img');
    im.addEventListener('error', function () { vis.remove(); });
    wire(sec, list.length);
    return sec;
  }

  function wire(sec, n) {
    var slides = sec.querySelectorAll('.tst__slide'), thumbs = sec.querySelectorAll('.tst__thumb');
    var bar = sec.querySelector('.tst__bar'), cur = 0, timer = null, box = sec.querySelector('.tst__box');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function resetBar(run) {
      bar.classList.remove('run'); void bar.offsetWidth; if (run) bar.classList.add('run');
    }
    function go(i) {
      cur = (i + n) % n;
      for (var k = 0; k < n; k++) {
        slides[k].classList.toggle('is-on', k === cur);
        if (k === cur) thumbs[k].setAttribute('aria-current', 'true'); else thumbs[k].removeAttribute('aria-current');
      }
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } resetBar(false); }
    function start() {
      if (n < 2 || reduce || timer) return;
      resetBar(true);
      timer = setInterval(function () { go(cur + 1); resetBar(true); }, AUTO);
    }
    sec.addEventListener('click', function (e) {
      var b = e.target.closest('.tst__btn,.tst__thumb'); if (!b) return;
      if (b.classList.contains('tst__btn')) go(cur + parseInt(b.getAttribute('data-d'), 10));
      else go(Array.prototype.indexOf.call(thumbs, b));
      stop(); start();
    });
    box.addEventListener('mouseenter', stop); box.addEventListener('mouseleave', start);
    box.addEventListener('focusin', stop); box.addEventListener('focusout', start);
    box.tabIndex = 0;
    box.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(cur - 1); stop(); }
      if (e.key === 'ArrowRight') { go(cur + 1); stop(); }
    });
    var x0 = null;
    box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); start();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { en[0].isIntersecting ? start() : stop(); }).observe(sec);
    } else start();
  }

  function isHome() {
    var p = location.pathname.replace(/index\.html$/, '').replace(/\/+$/, '');
    return p === '';
  }

  function place() {
    var cur = document.getElementById('testimonials');
    if (!isHome()) { if (cur) cur.remove(); return; }
    if (!reviews || !reviews.length) return;
    if (cur) return;
    var anchor = document.getElementById('contact-now');
    if (!anchor || !anchor.parentNode) return;
    anchor.parentNode.insertBefore(build(reviews), anchor.nextSibling);
  }

  function init() {
    if (!document.getElementById('tst-css')) {
      var st = document.createElement('style'); st.id = 'tst-css'; st.textContent = css; document.head.appendChild(st);
    }
    if (loading || reviews) { place(); return; }
    loading = true;
    fetch(JSON_URL, { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : { reviews: [] }; })
      .catch(function () { return { reviews: [] }; })
      .then(function (d) {
        reviews = (d.reviews || []).filter(function (r) { return r && r.approved === true && r.name && r.text; });
        loading = false; place();
        if (reviews.length) new MutationObserver(place).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
      });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
