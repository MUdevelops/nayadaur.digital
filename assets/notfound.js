/* NayaDaur Digital - 404 page illustration.
   Adds the "robot searching" visual next to the existing 404 text; works on desktop and mobile.
   Only acts when the 404 section (.nf) is on screen. */
(function () {
  'use strict';
  var S640 = '/assets/images/404-robot-640.webp?v=1';
  var S1100 = '/assets/images/404-robot-1100.webp?v=1';
  var css = '' +
  '.nf--art{display:grid;gap:clamp(18px,4vw,48px);align-items:center;justify-items:center;max-width:1160px;margin-inline:auto;padding-inline:var(--gutter,20px);text-align:center}' +
  '.nf--art>.container{width:100%;padding-inline:0}' +
  '.nf--art h1{margin-bottom:12px}' +
  '.nf--art p{margin-inline:auto}' +
  '.nf--art .actions{justify-content:center}' +
  '.nf__art{position:relative;margin:0;width:min(100%,460px)}' +
  '.nf__art:before{content:"";position:absolute;inset:6% 0 0;background:radial-gradient(closest-side,rgba(56,189,248,.22),rgba(56,189,248,0) 75%);z-index:0}' +
  '.nf__art img{position:relative;z-index:1;display:block;width:100%;height:auto;filter:drop-shadow(0 18px 24px rgba(11,25,44,.18));animation:nfFloat 5s ease-in-out infinite}' +
  '@keyframes nfFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
  '@media (min-width:900px){' +
  '.nf--art{grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);text-align:left;justify-items:stretch}' +
  '.nf--art>.container{max-width:none}' +
  '.nf--art p{margin-inline:0}' +
  '.nf--art .actions{justify-content:flex-start}' +
  '.nf__art{order:2;width:100%;max-width:560px;justify-self:end}}' +
  '@media (prefers-reduced-motion:reduce){.nf__art img{animation:none}}';

  function place() {
    var sec = document.querySelector('main section.nf');
    if (!sec) return;
    if (sec.querySelector('.nf__art')) return;
    var fig = document.createElement('figure');
    fig.className = 'nf__art';
    fig.innerHTML = '<img src="' + S1100 + '" srcset="' + S640 + ' 640w, ' + S1100 + ' 1100w" sizes="(max-width:899px) 88vw,560px" width="1100" height="840" alt="Friendly robot with a magnifying glass searching on a glowing 404 sign" decoding="async">';
    sec.insertBefore(fig, sec.firstChild);
    sec.classList.add('nf--art');
  }

  function init() {
    if (!document.getElementById('nf-css')) {
      var st = document.createElement('style'); st.id = 'nf-css'; st.textContent = css; document.head.appendChild(st);
    }
    place();
    new MutationObserver(place).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'complete') setTimeout(init, 200); else window.addEventListener('load', function () { setTimeout(init, 200); });
})();
