/* NayaDaur Digital - CEO & Founder section (About page only).
   Inserted after the "How we work" section, before the closing call-to-action band.
   Removed automatically when the visitor navigates to any other page. */
(function () {
  'use strict';
  var PHOTO_480 = '/assets/images/founder-umar-480.webp?v=2';
  var PHOTO_960 = '/assets/images/founder-umar-960.webp?v=2';

  var css = '' +
  '.fnd{position:relative;background:var(--cream,#F8F5EC);padding:clamp(36px,5vw,56px) 0;overflow:hidden;border-block:1px solid rgba(11,25,44,.06)}' +
  '.fnd__grid{display:grid;gap:clamp(28px,5vw,64px);align-items:center}' +
  '.fnd__photo{position:relative;margin:0 auto;width:min(80%,340px)}' +
  '.fnd__photo:before{content:"";position:absolute;inset:8% -10% -6% -10%;background:radial-gradient(closest-side,rgba(56,189,248,.28),rgba(56,189,248,0) 72%);z-index:0}' +
  '.fnd__photo img{position:relative;z-index:1;display:block;width:100%;height:auto;filter:drop-shadow(0 22px 30px rgba(11,25,44,.22))}' +
  '.fnd__role{display:inline-block;margin:0 0 12px;padding:6px 14px;border-radius:999px;background:var(--g,#0B192C);color:#fff;font:600 .82rem/1.2 var(--font,inherit);letter-spacing:.04em}' +
  '.fnd__body h2{margin:0 0 6px}' +
  '.fnd__title{margin:0 0 18px;color:#0A5E8C;font:600 1.02rem/1.4 var(--font-h,inherit)}' +
  '.fnd__body p{margin:0 0 14px;color:var(--ink,#0F1B2D);max-width:62ch}' +
  '.fnd__quote{margin:20px 0;padding:4px 0 4px 18px;border-left:4px solid var(--lime,#38BDF8);font:500 1.12rem/1.55 var(--font-h,inherit);color:var(--g,#0B192C)}' +
  '.fnd__links{display:flex;flex-wrap:wrap;gap:10px;margin:0}' +
  '@media (min-width:900px){.fnd__grid{grid-template-columns:minmax(0,4fr) minmax(0,8fr)}.fnd__photo{width:100%;max-width:350px}}' +
  '';

  function build() {
    var sec = document.createElement('section');
    sec.className = 'fnd';
    sec.id = 'founder';
    sec.setAttribute('aria-labelledby', 'fnd-t');
    sec.innerHTML = '<div class="container"><div class="fnd__grid">' +
      '<figure class="fnd__photo"><img src="' + PHOTO_960 + '" srcset="' + PHOTO_480 + ' 480w, ' + PHOTO_960 + ' 960w" sizes="(max-width:899px) 70vw,350px" width="960" height="1424" alt="Muhammad Umar Jamal, CEO and Founder of NayaDaur Digital" loading="lazy" decoding="async"></figure>' +
      '<div class="fnd__body">' +
      '<span class="fnd__role">CEO &amp; Founder</span>' +
      '<h2 id="fnd-t">Muhammad Umar Jamal</h2>' +
      '<p class="fnd__title">AI Application Engineer &middot; Software Developer</p>' +
      '<p>Muhammad Umar Jamal founded NayaDaur Digital in Okara to give local businesses one dependable team for their brand, website and everyday software.</p>' +
      '<p>As an AI Application Engineer, he turns ideas, APIs and automation into working applications, from intelligent assistants and document search to full-stack web and desktop software.</p>' +
      '<p>He also runs MUdevelops, his developer brand and GitHub handle, where he publishes open-source projects and shares programming tutorials on YouTube.</p>' +
      '<blockquote class="fnd__quote">Don\u2019t just build models. Build applications around them.</blockquote>' +
      '<p class="fnd__links">' +
      '<a class="btn btn--sm" href="https://github.com/MUdevelops" target="_blank" rel="noopener">GitHub: MUdevelops</a>' +
      '<a class="btn btn--line btn--sm" href="https://www.youtube.com/@MUdevelops" target="_blank" rel="noopener">YouTube</a>' +
      '<a class="btn btn--line btn--sm" href="https://m-umar-jamal.netlify.app/" target="_blank" rel="noopener">Portfolio</a>' +
      '</p></div></div></div>';
    return sec;
  }

  function addSchema() {
    if (document.getElementById('fnd-ld')) return;
    var s = document.createElement('script');
    s.type = 'application/ld+json'; s.id = 'fnd-ld';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Person',
      name: 'Muhammad Umar Jamal', jobTitle: 'CEO & Founder',
      worksFor: { '@type': 'Organization', name: 'NayaDaur Digital', url: 'https://nayadaur.digital/' },
      sameAs: ['https://github.com/MUdevelops', 'https://www.youtube.com/@MUdevelops', 'https://m-umar-jamal.netlify.app/']
    });
    document.head.appendChild(s);
  }

  function isAbout() { return location.pathname.replace(/\/+$/, '') === '/about'; }

  function place() {
    var cur = document.getElementById('founder');
    if (!isAbout()) {
      if (cur) cur.remove();
      var ld = document.getElementById('fnd-ld'); if (ld) ld.remove();
      return;
    }
    if (cur) return;
    var after = document.querySelector('section[aria-labelledby="how-t"]');
    var cta = document.querySelector('main .cta-band');
    var ref = after ? after.nextSibling : cta;
    var parent = after ? after.parentNode : (cta && cta.parentNode);
    if (!parent) return;
    parent.insertBefore(build(), ref);
    addSchema();
  }

  function init() {
    if (!document.getElementById('fnd-css')) {
      var st = document.createElement('style'); st.id = 'fnd-css'; st.textContent = css; document.head.appendChild(st);
    }
    setTimeout(function () {
      place();
      new MutationObserver(place).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
    }, 250);
  }
  if (document.readyState === 'complete') init(); else window.addEventListener('load', init);
})();
