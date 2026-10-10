// Single source of truth for social URLs (personal accounts: single-t).
// Mirror any change here in the <noscript> list in index.html so the page
// works with JavaScript disabled.
var SITE_LINKS = [
  { label: "GitHub", url: "https://github.com/hyoonqt" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/zaki-h-7b47bb370/" },
  { label: "Instagram", url: "https://instagram.com/eemanon.__" },
  { label: "Email", url: "mailto:zakihakim385@gmail.com" }
];

(function () {
  function iconFor(label) {
    // Inline SVG icons keep the page dependency-free (no Font Awesome).
    if (label === "GitHub") {
      return (
        '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="currentColor">' +
        '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 ' +
        '0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 ' +
        '1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 ' +
        '0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 ' +
        '1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 ' +
        '0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 ' +
        '8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>'
      );
    }
    if (label === "LinkedIn") {
      return (
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">' +
        '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>'
      );
    }
    if (label === "Instagram") {
      return (
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/>' +
        '<circle cx="12" cy="12" r="4.2"/>' +
        '<circle cx="17.4" cy="6.6" r="1.4" fill="currentColor" stroke="none"/>' +
        "</svg>"
      );
    }
    if (label === "Email") {
      return (
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
        '<polyline points="22,6 12,13 2,6"/>' +
        "</svg>"
      );
    }
    // Generic globe icon for any future entry without a dedicated glyph.
    return (
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>' +
      '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
      "</svg>"
    );
  }

  function render() {
    var list = document.getElementById("social-list");
    if (!list) return;
    list.textContent = "";
    SITE_LINKS.forEach(function (link, i) {
      var li = document.createElement("li");
      // Stagger the entrance to match the CSS cascade.
      li.style.animationDelay = (1 + i * 0.1).toFixed(2) + "s";
      var tip = document.createElement("div");
      tip.className = "tooltip";
      var a = document.createElement("a");
      a.className = "social";
      a.href = link.url;
      a.setAttribute("aria-label", link.label);
      a.rel = link.url.indexOf("mailto:") === 0 ? "noopener" : "me noopener";
      a.innerHTML = iconFor(link.label);
      var label = document.createElement("span");
      label.className = "tooltiptext";
      label.setAttribute("aria-hidden", "true");
      label.textContent = link.label;
      tip.appendChild(a);
      tip.appendChild(label);
      li.appendChild(tip);
      list.appendChild(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();

(function () {
  // Service-worker removal backup: this site ships no worker (see sw.js).
  // If an old one (e.g. ex-Jekyll) still controls this origin, drop it
  // and its caches on page load. Harmless when nothing is registered.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) {
        reg.unregister();
      });
    });
    if (window.caches) {
      caches.keys().then(function (keys) {
        keys.forEach(function (key) {
          caches.delete(key);
        });
      });
    }
  }
})();
