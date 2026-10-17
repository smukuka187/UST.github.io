/**
 * Google Analytics 4 (GA4) tracking for BabyCareWorld
 *
 * HOW TO ACTIVATE:
 * 1. Sign in to Google Analytics (https://analytics.google.com) and create a
 *    GA4 property for your site.
 * 2. Copy your Measurement ID (looks like G-XXXXXXXXXX).
 * 3. Replace GA_MEASUREMENT_ID below with that ID.
 *
 * Tracks: page views, time on page, and which pages are read most.
 */
(function () {
  "use strict";

  /* Replace with your real GA4 Measurement ID */
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

  /* 1. Load the gtag library */
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  /* 2. Initialize and send the page view */
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
})();
