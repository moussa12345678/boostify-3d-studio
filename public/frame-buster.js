// Frame-buster: defense-in-depth against clickjacking.
// CSP frame-ancestors is not enforced via <meta> tag, so we add JS.
// Loaded as an external same-origin script so CSP `script-src 'self'` allows it.
(function () {
  try {
    if (window.self !== window.top) {
      // Force the top window to navigate to our URL.
      window.top.location = window.self.location;
    }
  } catch (e) {
    // Cross-origin access to window.top.location throws —
    // in that case, replace ourselves with a blank page.
    window.self.location = 'about:blank';
  }
})();
