/* Consent Mode v2. gtag.js is not requested until analytics consent is stored
   (Quebec Law 25: no tracking before consent). Ads stay denied after accept. */
(function () {
  var el = document.currentScript;
  var GA_ID = el && el.getAttribute('data-ga-id');
  var KEY = (el && el.getAttribute('data-storage-key')) || 'fv_cookie_consent';
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);

  function remember(choice) {
    try { localStorage.setItem(KEY, choice); } catch (e) {}
    document.documentElement.setAttribute('data-consent', choice);
  }

  function grantAnalytics() {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    if (window.__fvGaLoaded || !GA_ID) return;
    window.__fvGaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  window.fvSetConsent = function (choice) {
    if (choice !== 'granted' && choice !== 'denied') return;
    remember(choice);
    if (choice === 'granted') grantAnalytics();
    else {
      gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };

  /* go_click and other events: sent only when analytics consent is granted and
     gtag.js is loaded; otherwise nothing leaves the browser and cb runs at once.
     cb (optional) runs after the hit is sent, or after 800 ms at most. */
  window.fvTrack = function (name, params, cb) {
    var sent = false;
    function done() { if (sent) return; sent = true; if (cb) cb(); }
    if (!window.__fvGaLoaded) { done(); return; }
    var p = { transport_type: 'beacon', event_callback: done, event_timeout: 800 };
    for (var k in params) if (Object.prototype.hasOwnProperty.call(params, k)) p[k] = params[k];
    try { gtag('event', name, p); } catch (e) { done(); return; }
    if (cb) setTimeout(done, 800);
  };
  /* Outbound affiliate clicks: /go/<brand>/ links and rel="sponsored" links. */
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a) return;
    var u; try { u = new URL(a.href, location.href); } catch (e) { return; }
    var brand = null;
    if (u.host === location.host) {
      var m = u.pathname.match(/^\/go\/([^\/]+)\/?/);
      if (m) brand = m[1];
    } else if (/(^|\s)sponsored(\s|$)/.test(a.getAttribute('rel') || '')) {
      brand = u.hostname.replace(/^www\./, '');
    }
    if (!brand) return;
    window.fvTrack('go_click', {
      brand: brand,
      lang: document.documentElement.getAttribute('lang') || 'fr',
      page_location: location.href,
      go_source: 'link_click'
    });
  }, true);

  var existing = null;
  try { existing = localStorage.getItem(KEY); } catch (e) {}
  if (existing === 'granted') {
    document.documentElement.setAttribute('data-consent', 'granted');
    grantAnalytics();
  } else if (existing === 'denied') {
    document.documentElement.setAttribute('data-consent', 'denied');
  }
})();
