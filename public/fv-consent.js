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

  var existing = null;
  try { existing = localStorage.getItem(KEY); } catch (e) {}
  if (existing === 'granted') {
    document.documentElement.setAttribute('data-consent', 'granted');
    grantAnalytics();
  } else if (existing === 'denied') {
    document.documentElement.setAttribute('data-consent', 'denied');
  }
})();
