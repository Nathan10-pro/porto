(function () {
  "use strict";
  var esc = window.ProjectsUI.esc;

  window.addEventListener("load", function () {
    var pl = document.getElementById("preloader");
    setTimeout(function () { pl.classList.add("hide"); }, 400);
  });

  loadSiteData().then(function (data) {
    var p = data.profile;
    document.getElementById("navMark").textContent = p.inisial;
    document.getElementById("navGithub").href = p.githubUrl;
    document.getElementById("navLinkedin").href = p.linkedinUrl;
    document.getElementById("navInstagram").href = p.instagramUrl;
    document.getElementById("footerName").textContent = p.nama;
    document.getElementById("year").textContent = new Date().getFullYear();
    document.title = "Semua Proyek — " + p.nama;

    var all = data.projects;
    var gridEl = document.getElementById("allProjectsGrid");
    var countEl = document.getElementById("pageCount").querySelector("b");
    var filterRow = document.getElementById("filterRow");

    var categories = ["Semua"];
    all.forEach(function (proj) {
      if (proj.kategori && categories.indexOf(proj.kategori) === -1) categories.push(proj.kategori);
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    function observeReveals(scopeEl) {
      if (!scopeEl) return;
      if (scopeEl.classList && scopeEl.classList.contains("reveal")) revealObserver.observe(scopeEl);
      scopeEl.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });
    }

    function renderChips(active) {
      filterRow.innerHTML = categories.map(function (cat) {
        return '<button class="filter-chip' + (cat === active ? " active" : "") + '" data-cat="' + esc(cat) + '">' + esc(cat) + "</button>";
      }).join("");
      filterRow.querySelectorAll(".filter-chip").forEach(function (chip) {
        chip.addEventListener("click", function () { applyFilter(chip.dataset.cat); });
      });
    }

    function applyFilter(cat) {
      var list = cat === "Semua" ? all : all.filter(function (proj) { return proj.kategori === cat; });
      countEl.textContent = list.length;
      renderChips(cat);
      window.ProjectsUI.mountProjects(gridEl, list, list);
      observeReveals(gridEl);
    }

    observeReveals(document.querySelector(".page-hero"));
    observeReveals(document.getElementById("filterRow"));

    applyFilter("Semua");
  });
})();

/* ---------- Theme Switcher Logic (samakan dengan main.js) ---------- */
document.addEventListener("DOMContentLoaded", function () {
  var themeBtn = document.getElementById("themeSwitchBtn");
  if (themeBtn) {
    if (localStorage.getItem("portfolio_theme") === "onepiece") {
      document.body.classList.add("theme-onepiece");
    }
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("theme-onepiece");
      if (window.ProjectsUI && window.ProjectsUI.resetAllTilts) {
        window.ProjectsUI.resetAllTilts();
      }
      var isOP = document.body.classList.contains("theme-onepiece");
      localStorage.setItem("portfolio_theme", isOP ? "onepiece" : "default");
    });
  }
});