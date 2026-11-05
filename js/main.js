/* Renders the data in data.js into the pages. No build step needed. */
(function () {
  "use strict";

  var email = SITE.emailUser + "@" + SITE.emailDomain;

  // Optional profile buttons: <a data-link="cv"> is removed when SITE.cv is empty.
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    var url = key === "email" ? "mailto:" + email : SITE[key];
    if (url) {
      el.href = url;
    } else {
      el.remove();
    }
  });

  // Spelled-out address in the Contact section becomes a real mailto link.
  var contact = document.getElementById("contact-email");
  if (contact) {
    var link = document.createElement("a");
    link.href = "mailto:" + email;
    link.textContent = email.replace("@", " [at] ").replace(/\./g, " [dot] ");
    contact.replaceChildren(link);
  }

  var year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();

  // ---------- News ----------
  var newsBox = document.getElementById("news-list");
  if (newsBox) {
    var VISIBLE = 5;
    NEWS.forEach(function (n, i) {
      var row = document.createElement("div");
      row.className = "news-item";
      if (i >= VISIBLE) {
        row.classList.add("news-older");
        row.hidden = true;
      }
      row.innerHTML = '<span class="news-date">' + n.date + "</span><span>" + n.content + "</span>";
      newsBox.appendChild(row);
    });

    var toggle = document.getElementById("toggle-news");
    if (NEWS.length <= VISIBLE) {
      toggle.remove();
    } else {
      toggle.addEventListener("click", function () {
        var older = newsBox.querySelectorAll(".news-older");
        var show = older[0].hidden;
        older.forEach(function (el) { el.hidden = !show; });
        toggle.textContent = show ? "Show Less △" : "Show More ▽";
      });
    }
  }

  // ---------- Publications ----------
  function pubItem(pub) {
    var authors = pub.authors.replace(SITE.name, '<span class="my-name">' + SITE.name + "</span>");
    var links = (pub.links || []).map(function (l, i) {
      return '<a class="link-button' + (i === 0 ? " primary" : "") + '" href="' + l.url + '">' + l.label + "</a>";
    }).join("");
    return (
      '<div class="publication-item">' +
        '<div class="publication-title">' + pub.title + "</div>" +
        '<div class="publication-authors">' + authors + "</div>" +
        '<div class="publication-venue">' +
          (pub.tag ? '<span class="tag">' + pub.tag + "</span>" : "") + pub.venue +
        "</div>" +
        (links ? '<div class="publication-links">' + links + "</div>" : "") +
      "</div>"
    );
  }

  function renderList(id, items) {
    var box = document.getElementById(id);
    if (box) box.innerHTML = items.map(pubItem).join("");
  }

  var pubBox = document.getElementById("publication-list");
  if (pubBox) {
    var years = [];
    PUBLICATIONS.forEach(function (p) {
      if (years.indexOf(p.year) === -1) years.push(p.year);
    });
    years.sort(function (a, b) { return b - a; });
    pubBox.innerHTML = years.map(function (y) {
      var items = PUBLICATIONS.filter(function (p) { return p.year === y; });
      return '<div class="year-header">' + y + "</div>" + items.map(pubItem).join("");
    }).join("");
  }

  renderList("in-progress-list", IN_PROGRESS);
  renderList("presentation-list", PRESENTATIONS);
})();
