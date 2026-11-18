(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var esc = window.ProjectsUI.esc;

  /* ---------- Preloader ---------- */
  window.addEventListener("load", function () {
    var pl = document.getElementById("preloader");
    setTimeout(function () { pl.classList.add("hide"); }, 400);
  });

  /* ---------- Load site data, then render everything ---------- */
  loadSiteData().then(function (data) {
    renderProfile(data.profile);
    renderStats(data.stats);
    renderSkills(data.skills);
    renderTicker(data.techStack);
    renderTimeline(data.timeline);
    renderTestimonials(data.testimonials);
    renderContact(data.profile);

    var featured = data.projects.slice(0, 6);
    window.ProjectsUI.mountProjects(document.getElementById("projectGrid"), featured, data.projects);

    initInteractions(data);
  });

  /* ---------- Renderers ---------- */
  function renderProfile(p) {
    document.getElementById("navMark").textContent = p.inisial;
    document.getElementById("cardInitials").textContent = p.inisial;
    document.getElementById("cardName").textContent = p.nama;
    document.getElementById("cardRole").textContent = p.peran[0];
    document.title = p.nama + " — Portofolio RPL";

    document.getElementById("heroEyebrow").textContent = p.eyebrow;
    var parts = p.nama.trim().split(" ");
    var last = parts.pop();
    var first = parts.join(" ");
    document.getElementById("heroName").innerHTML = esc(first) + (first ? "<br>" : "") + '<span class="stroke">' + esc(last) + "</span>";
    document.getElementById("heroDesc").textContent = p.deskripsiHero;
    document.getElementById("cvBtn").href = p.cvUrl;

    document.getElementById("aboutP1").textContent = p.tentang1;
    document.getElementById("aboutP2").textContent = p.tentang2;

    document.getElementById("navGithub").href = p.githubUrl;
    document.getElementById("navLinkedin").href = p.linkedinUrl;
    document.getElementById("navInstagram").href = p.instagramUrl;

    document.getElementById("footerName").textContent = p.nama;

    startTyping(p.peran);
  }

  function renderStats(stats) {
    var html = stats.map(function (s, i) {
      return '<div class="stat reveal reveal-delay-' + ((i % 4) + 1) + '">' +
        '<div class="stat-num"><span class="counter" data-target="' + s.angka + '">0</span>+</div>' +
        '<div class="stat-label">' + esc(s.label) + '</div></div>';
    }).join("");
    document.getElementById("statsGrid").innerHTML = html;
  }

  function renderSkills(skills) {
    var groups = {}, order = [];
    skills.forEach(function (s) {
      if (!groups[s.kategori]) { groups[s.kategori] = []; order.push(s.kategori); }
      groups[s.kategori].push(s);
    });
    var html = order.map(function (cat, gi) {
      var items = groups[cat].map(function (s) {
        return '<div class="skill-item"><div class="skill-top">' +
          '<span class="skill-name">' + esc(s.nama) + '</span>' +
          '<span class="skill-level">' + esc(s.label) + '</span></div>' +
          '<div class="skill-track"><div class="skill-fill" data-level="' + s.level + '"></div></div></div>';
      }).join("");
      return '<div class="skill-group reveal reveal-delay-' + ((gi % 4) + 1) + '">' +
        '<p class="skill-group-title">' + esc(cat) + '</p>' + items + '</div>';
    }).join("");
    document.getElementById("skillsGroups").innerHTML = html;
  }

  function renderTicker(list) {
    var itemsHtml = list.map(function (name) { return "<span>" + esc(name) + "</span>"; }).join("");
    document.getElementById("tickerTrack").innerHTML = itemsHtml + itemsHtml;
  }

  function renderTimeline(list) {
    var html = list.map(function (t, i) {
      return '<div class="tl-item reveal reveal-delay-' + ((i % 4) + 1) + '">' +
        '<div class="tl-dot"></div><div class="tl-content">' +
        '<span class="tl-year">' + esc(t.tahun) + '</span>' +
        '<span class="tl-badge">' + esc(t.tipe) + '</span>' +
        '<h4 class="tl-title">' + esc(t.judul) + '</h4>' +
        '<p class="tl-desc">' + esc(t.desc) + '</p></div></div>';
    }).join("");
    document.getElementById("timelineList").innerHTML = html;
  }

  function renderTestimonials(list) {
    var html = list.map(function (t, i) {
      return '<div class="testi-card reveal reveal-delay-' + ((i % 4) + 1) + '">' +
        '<p class="testi-quote">' + esc(t.isi) + '</p>' +
        '<div class="testi-author"><span class="testi-name">' + esc(t.nama) + '</span>' +
        '<span class="testi-role">' + esc(t.peran) + '</span></div></div>';
    }).join("");
    document.getElementById("testimonialGrid").innerHTML = html;
  }

  function renderContact(p) {
    var email = document.getElementById("contactEmail");
    email.textContent = p.email; email.href = "mailto:" + p.email;
    var wa = document.getElementById("contactWhatsapp");
    wa.textContent = p.whatsapp; wa.href = p.whatsappUrl;
    document.getElementById("contactLocation").textContent = p.lokasi;
    document.getElementById("contactSchool").textContent = p.sekolah;
  }

  /* ---------- Typing effect for hero role ---------- */
  function startTyping(roles) {
    var typedEl = document.getElementById("typedRole");
    if (!roles || !roles.length || !typedEl) return;
    if (reduceMotion) { typedEl.textContent = roles[0]; return; }
    var ri = 0, ci = 0, deleting = false;
    function loop() {
      var word = roles[ri];
      if (!deleting) {
        ci++;
        typedEl.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; setTimeout(loop, 1400); return; }
      } else {
        ci--;
        typedEl.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(loop, deleting ? 45 : 85);
    }
    setTimeout(loop, 900);
  }

  /* ---------- Everything else, wired up once content is in the DOM ---------- */
  function initInteractions(data) {
    document.getElementById("year").textContent = new Date().getFullYear();

    /* Ember particles */
    if (!reduceMotion) {
      var layer = document.getElementById("emberLayer");
      function spawnEmber() {
        var e = document.createElement("span");
        e.className = "ember";
        e.style.left = (Math.random() * 100) + "%";
        var duration = 6 + Math.random() * 6;
        e.style.animationDuration = duration + "s";
        e.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
        layer.appendChild(e);
        setTimeout(function () { e.remove(); }, duration * 1000 + 200);
      }
      for (var i = 0; i < 10; i++) { setTimeout(spawnEmber, i * 300); }
      setInterval(spawnEmber, 700);
    }

    /* Reveal on scroll */
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

    /* Active nav link on scroll */
    var navLinks = document.querySelectorAll(".nav-link");
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) { link.classList.toggle("active", link.dataset.sec === id); });
        }
      });
    }, { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (sec) { navObserver.observe(sec); });

    /* Skill bars */
    var skillObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + "%";
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".skill-fill").forEach(function (el) { skillObserver.observe(el); });

    /* Hero card mini stat bars (decorative, static HTML/CSS/JS bars) */
    document.querySelectorAll(".card-stat-fill").forEach(function (el) {
      setTimeout(function () { el.style.width = el.dataset.fill + "%"; }, 900);
    });

    /* Counters */
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.target, 10);
          var startTime = null, duration = 1200;
          function step(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(step); else el.textContent = target;
          }
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".counter").forEach(function (el) { counterObserver.observe(el); });

    /* Tilt on hero card (project cards already handled by ProjectsUI.mountProjects) */
    window.ProjectsUI.attachTilt(document.getElementById("home"));

    /* Contact form -> mailto */
    var form = document.getElementById("contactForm");
    var note = document.getElementById("formNote");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("fname").value.trim();
      var email = document.getElementById("femail").value.trim();
      var msg = document.getElementById("fmsg").value.trim();
      var to = data.profile.email;
      var subject = "Pesan dari Portofolio — " + name;
      var body = msg + "\n\nDari: " + name + " (" + email + ")";
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (note) {
        note.textContent = "Membuka aplikasi email kamu...";
        note.classList.add("success");
      }
    });
  }
})();

/* ---------- Theme Switcher Logic ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("themeSwitchBtn");

  if (themeBtn) {
    // 1. Cek apakah pengguna sebelumnya menggunakan tema One Piece
    if (localStorage.getItem("portfolio_theme") === "onepiece") {
      document.body.classList.add("theme-onepiece");
    }

    // 2. Aksi saat lingkaran diklik
    themeBtn.addEventListener("click", function () {
      // Toggle (tambah/hapus) class tema pada body
      document.body.classList.toggle("theme-onepiece");

      // Pastikan tidak ada kartu yang "nyangkut" miring akibat hover
      // saat tema berganti (penyebab kesan animasi stuck/patah).
      if (window.ProjectsUI && window.ProjectsUI.resetAllTilts) {
        window.ProjectsUI.resetAllTilts();
      }
      
      // Simpan status tema ke memori browser
      const isOP = document.body.classList.contains("theme-onepiece");
      localStorage.setItem("portfolio_theme", isOP ? "onepiece" : "default");
    });
  }
});