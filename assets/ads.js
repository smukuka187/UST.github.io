/**
 * Google AdSense integration for BabyCareWorld
 *
 * HOW TO ACTIVATE:
 * 1. Sign in to Google AdSense (https://www.google.com/adsense) and add your site.
 * 2. Copy your publisher ID (looks like ca-pub-XXXXXXXXXXXXXXXX).
 * 3. Replace ADS_PUBLISHER_ID below with that ID.
 * 4. Create three ad units in AdSense (header, in-content, footer) and replace
 *    the SLOT_* values below with your real slot IDs.
 *
 * Ad placements: header banner, in-content (mid-article), footer.
 */

(function () {
  "use strict";

  /* Replace with your real AdSense publisher ID */
  var ADS_PUBLISHER_ID = "ca-pub-0000000000000000";

  /* Manual ad unit slot IDs — replace with real ones from your AdSense dashboard */
  var SLOT_HEADER = "0000000001";
  var SLOT_CONTENT = "0000000002";
  var SLOT_FOOTER = "0000000003";

  /* ----------------------------------------------------------------
   * 1. Load the AdSense library (required to render ad units)
   * ---------------------------------------------------------------- */
  var adsScript = document.createElement("script");
  adsScript.async = true;
  adsScript.crossOrigin = "anonymous";
  adsScript.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
    ADS_PUBLISHER_ID;
  document.head.appendChild(adsScript);

  /* ----------------------------------------------------------------
   * 2. Helpers
   * ---------------------------------------------------------------- */
  function createAd(slot, format, extraClass) {
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle" + (extraClass ? " " + extraClass : "");
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", ADS_PUBLISHER_ID);
    ins.setAttribute("data-ad-slot", slot);
    ins.setAttribute("data-ad-format", format || "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    return ins;
  }

  function makeAdWrap(label) {
    var wrap = document.createElement("div");
    wrap.className = "ad-wrap";
    var lbl = document.createElement("span");
    lbl.className = "ad-label";
    lbl.textContent = label || "Advertisement";
    wrap.appendChild(lbl);
    return wrap;
  }

  function injectAd(wrap, slot, format, extraClass) {
    var ad = createAd(slot, format, extraClass);
    wrap.appendChild(ad);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  /* ----------------------------------------------------------------
   * 3. Place the ads
   * ---------------------------------------------------------------- */
  ready(function () {
    /* --- Header banner: directly after the site header --- */
    var header = document.getElementById("header");
    if (header && header.parentNode) {
      var hWrap = makeAdWrap("Advertisement");
      injectAd(hWrap, SLOT_HEADER, "auto", "ad-banner");
      header.parentNode.insertBefore(hWrap, header.nextSibling);
    }

    /* --- In-content: mid-way through article content --- */
    var article = document.querySelector(".article-content");
    if (article) {
      var paragraphs = article.querySelectorAll("p");
      var midIndex = Math.floor(paragraphs.length / 2);
      if (midIndex > 0 && paragraphs[midIndex]) {
        var cWrap = makeAdWrap("Advertisement");
        injectAd(cWrap, SLOT_CONTENT, "auto", "ad-incontent");
        paragraphs[midIndex].parentNode.insertBefore(cWrap, paragraphs[midIndex].nextSibling);
      }
    }

    /* --- Footer: just before the site footer --- */
    var footer = document.getElementById("footer");
    if (footer && footer.parentNode) {
      var fWrap = makeAdWrap("Advertisement");
      injectAd(fWrap, SLOT_FOOTER, "auto", "ad-footer");
      footer.parentNode.insertBefore(fWrap, footer);
    }
  });
})();
