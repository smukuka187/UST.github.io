/**
 * Google AdSense integration for BabyCareWorld
 *
 * HOW TO ACTIVATE:
 * 1. Sign in to Google AdSense (https://www.google.com/adsense) and add your site.
 * 2. Copy your publisher ID (looks like ca-pub-XXXXXXXXXXXXXXXX).
 * 3. Replace ADS_PUBLISHER_ID below with that ID.
 * 4. In your AdSense dashboard, enable "Auto ads" — Google will automatically
 *    place ads in optimal spots across every page.
 * 5. (Optional) Create ad units in AdSense and replace the SLOT_* values below
 *    with your real slot IDs if you want to control the manual placements yourself.
 *
 * The manual ad units below (header banner, in-content, sidebar, footer) are
 * always rendered. Auto ads adds more on top of those automatically.
 */

(function () {
  "use strict";

  /* Replace with your real AdSense publisher ID */
  var ADS_PUBLISHER_ID = "ca-pub-0000000000000000";

  /* Manual ad unit slot IDs — replace with real ones from your AdSense dashboard */
  var SLOT_HEADER = "0000000001";
  var SLOT_CONTENT = "0000000002";
  var SLOT_SIDEBAR = "0000000003";
  var SLOT_FOOTER = "0000000004";

  /* ----------------------------------------------------------------
   * 1. Load the AdSense library (also enables Auto ads)
   * ---------------------------------------------------------------- */
  var adsScript = document.createElement("script");
  adsScript.async = true;
  adsScript.crossOrigin = "anonymous";
  adsScript.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
    ADS_PUBLISHER_ID;
  document.head.appendChild(adsScript);

  /* ----------------------------------------------------------------
   * 2. Helper to build and inject an ad unit
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

  function injectAd(container, slot, format, extraClass) {
    var ad = createAd(slot, format, extraClass);
    container.appendChild(ad);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
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

    /* --- Sidebar: next to article content columns (col-lg-8) --- */
    var contentCol = document.querySelector(".col-lg-8");
    if (contentCol && contentCol.parentNode) {
      /* Only add a sidebar if there isn't one already */
      var row = contentCol.parentNode;
      var hasSidebar = row.querySelector(".col-lg-4.ad-sidebar");
      if (!hasSidebar) {
        var sideCol = document.createElement("div");
        sideCol.className = "col-lg-4 ad-sidebar";
        var sWrap = makeAdWrap("Advertisement");
        sWrap.classList.add("ad-sidebar-sticky");
        injectAd(sWrap, SLOT_SIDEBAR, "auto", "ad-sidebar-unit");
        sideCol.appendChild(sWrap);
        row.appendChild(sideCol);
      }
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
