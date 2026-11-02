// Google Analytics, only with consent (the same approach as monkeyvinerush.com). Loaded in each page's <head>:
// Analytics is off by default; the gtag script and its cookies are only loaded after a visitor taps Accept.
// The choice is kept in local storage (gg-consent: yes / no); "Cookie settings" in the footer reopens the banner.
(() => {
  const ID = 'G-JW23JSV7Q9', K = 'gg-consent';
  window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } window.gtag = gtag;
  gtag('consent', 'default', { analytics_storage:'denied', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied' });
  const get = () => { try { return localStorage.getItem(K); } catch(e){ return null; } };
  const load = () => { if (window.__ggGA) return; window.__ggGA = 1; gtag('consent', 'update', { analytics_storage:'granted' });
    const s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID; document.head.appendChild(s); gtag('js', new Date()); gtag('config', ID); };
  const wipe = () => { for (const n of document.cookie.split(';').map(x => x.split('=')[0].trim())) if (/^_ga/.test(n)) for (const d of ['', location.hostname, '.' + location.hostname.replace(/^www\./, '')]) document.cookie = n + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : ''); };
  window.ggConsent = { get, set:v => { const was = get(); try { localStorage.setItem(K, v); } catch(e){} if (v === 'yes') load(); else { wipe(); if (was === 'yes' && window.__ggGA) location.reload(); } } };
  if (get() === 'yes') load();
  // the banner (bottom of the page, until a choice is made) and the Cookie settings / Accept / Reject buttons
  const ready = () => {
    const css = document.createElement('style');
    css.textContent = ".ckbar{position:fixed;left:50%;bottom:max(16px,env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:60;width:min(720px,calc(100% - 24px));display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px;padding:16px 18px;border-radius:20px;background:rgba(19,23,34,.97);border:1px solid rgba(198,244,50,.45);box-shadow:0 18px 50px rgba(0,0,0,.5);color:#f4f1ea;font:400 15px/1.5 'Inter','Segoe UI',system-ui,sans-serif}"
      + ".ckbar[hidden]{display:none}.ckbar p{margin:0;flex:1 1 300px}.ckbar a{color:#c6f432;font-weight:600}.ckbtns{display:flex;gap:10px;flex:0 0 auto;margin-left:auto}"
      + ".ckb{font:600 1rem 'Space Grotesk','Segoe UI',system-ui,sans-serif;background:#c6f432;color:#11160a;border:0;border-radius:999px;padding:10px 22px;cursor:pointer}"
      + ".ckb.ghost{background:transparent;color:#f4f1ea;border:1px solid rgba(244,241,234,.35)}.ckb:focus-visible,.cklink:focus-visible{outline:2px solid #c6f432;outline-offset:3px}"
      + ".cklink{all:unset;cursor:pointer;color:inherit;text-decoration:underline;text-underline-offset:3px}"
      + "@media (max-width:520px){.ckbtns{width:100%}.ckb{flex:1}}";
    document.head.appendChild(css);
    const bar = document.createElement('div'); bar.className = 'ckbar'; bar.id = 'ckBar'; bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-live', 'polite'); bar.setAttribute('aria-label', 'Cookies'); bar.hidden = true;
    bar.innerHTML = '<p>We\'d like to use Google Analytics cookies to see how people use this site, so we can make it better. They\'re only set if you accept. <a href="/cookies/">Cookie policy</a></p>'
      + '<div class="ckbtns"><button type="button" class="ckb ghost" data-ck="no">Reject</button><button type="button" class="ckb" data-ck="yes">Accept</button></div>';
    document.body.appendChild(bar);
    const now = document.getElementById('ckNow');
    const sync = () => { if (now){ const v = get(); now.textContent = v === 'yes' ? now.dataset.yes : v === 'no' ? now.dataset.no : now.dataset.none; } };
    if (!get()) bar.hidden = false; sync();
    document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('[data-ck]'); if (b){ window.ggConsent.set(b.dataset.ck); bar.hidden = true; sync(); return; }
      if (e.target.closest && e.target.closest('#ckOpen')){ e.preventDefault(); bar.hidden = false; bar.querySelector('[data-ck="yes"]').focus(); } });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
