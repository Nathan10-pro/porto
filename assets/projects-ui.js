/* ==========================================================================
   PROJECTS UI — kartu proyek + modal detail (rail thumbnail + tampilan besar
   + deskripsi, navigasi panah & penghitung X / Y). Dipakai bareng oleh
   halaman beranda (index.html) dan halaman Semua Proyek (proyek.html).
   ========================================================================== */
/* ==========================================================================
   PROJECTS UI — kartu proyek + modal detail
   ========================================================================== */
(function (global) {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  function cardHTML(p, idx) {
    var rarityClass = (global.RARITY_CLASS && global.RARITY_CLASS[p.rarity]) || "r-common";
    var tags = (p.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");

    /* Glyph angka SELALU dirender (dipakai tema merah). Gambar cuma
       ditambahkan sebagai elemen tambahan; CSS yang memutuskan mana yang
       tampil sesuai tema aktif (lihat body.theme-onepiece di style.css). */
    var imgTag = p.gambar ? '<img src="' + esc(p.gambar) + '" alt="' + esc(p.judul) + '" class="project-img" onerror="this.remove()">' : "";

    return (
      '<article class="project-card tilt reveal reveal-delay-' + ((idx % 4) + 1) + '" data-index="' + idx + '">' +
        '<div class="project-thumb">' +
          imgTag +
          '<span class="glyph">' + pad2(idx + 1) + '</span>' +
          '<span class="project-rarity ' + rarityClass + '">' + esc(p.rarity) + '</span>' +
          '<button class="explore-btn" data-explore><span class="q"></span>Explore Item</button>' +
        '</div>' +
        '<div class="project-body">' +
          '<h3 class="project-title">' + esc(p.judul) + '</h3>' +
          '<p class="project-desc">' + esc(p.desc) + '</p>' +
          '<div class="project-tags">' + tags + '</div>' +
          '<div class="project-links"><a href="' + esc(p.demo || "#") + '" target="_blank" rel="noopener">Live Demo</a><a href="' + esc(p.source || "#") + '" target="_blank" rel="noopener">Source Code</a></div>' +
        '</div>' +
      '</article>'
    );
  }

  function renderProjectGrid(containerEl, list) {
    if (!containerEl) return;
    if (!list.length) {
      containerEl.innerHTML = '<p class="empty-state">Belum ada proyek yang cocok.</p>';
      return;
    }
    containerEl.innerHTML = list.map(cardHTML).join("");
  }

  function attachTilt(scopeEl) {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    
    (scopeEl || document).querySelectorAll(".tilt").forEach(function (card) {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "1";

      var glare = document.createElement("div");
      glare.className = "tcg-glare";
      card.appendChild(glare);

      card.style.transformStyle = "preserve-3d";

      card.addEventListener("mouseenter", function () {
        if (card.classList.contains("anim-paused")) return;
        card.style.transition = "none";
        glare.style.transition = "none";
      });

      card.addEventListener("mousemove", function (e) {
        if (card.classList.contains("anim-paused")) return;

        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = ((y - centerY) / centerY) * -15;
        var rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale3d(1.05, 1.05, 1.05)";

        var glareX = (x / rect.width) * 100;
        var glareY = (y / rect.height) * 100;
        glare.style.transform = "translate(" + (glareX - 100) + "%, " + (glareY - 100) + "%)";
      });

      card.addEventListener("mouseleave", function () {
        if (card.classList.contains("anim-paused")) return;
        
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        card.style.transition = "transform 0.5s ease";

        glare.style.transform = "translate(-100%, -100%)";
        glare.style.transition = "transform 0.5s ease";
      });
    });
  }

  /**
   * Kembalikan semua kartu .tilt ke posisi netral (tidak miring, glare
   * tersembunyi). Dipanggil saat tema di-switch supaya kartu yang sedang
   * "mid-tilt" (mouse masih di atasnya saat tombol tema diklik) tidak
   * kelihatan nyangkut miring di tema baru.
   */
  function resetAllTilts(scopeEl) {
    (scopeEl || document).querySelectorAll(".tilt").forEach(function (card) {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      var glare = card.querySelector(".tcg-glare");
      if (glare) {
        glare.style.transition = "transform 0.3s ease";
        glare.style.transform = "translate(-100%, -100%)";
      }
    });
  }

  function attachPauseButtons(scopeEl) {
    (scopeEl || document).querySelectorAll("[data-pause]").forEach(function (btn) {
      if (btn.dataset.pauseBound) return;
      btn.dataset.pauseBound = "1";
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var card = btn.closest(".tilt");
        var paused = card.classList.toggle("anim-paused");
        btn.textContent = paused ? "\u25B6" : "\u275A\u275A";
        btn.setAttribute("aria-label", paused ? "Lanjutkan animasi kartu" : "Jeda animasi kartu");

        if (paused) {
          card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
          card.style.transition = "transform 0.5s ease";
          var glare = card.querySelector(".tcg-glare");
          if (glare) {
            glare.style.transform = "translate(-100%, -100%)";
            glare.style.transition = "transform 0.5s ease";
          }
        }
      });
    });
  }

  function attachExploreButtons(scopeEl, list, modal) {
    (scopeEl || document).querySelectorAll("[data-explore]").forEach(function (btn) {
      if (btn.dataset.exploreBound) return;
      btn.dataset.exploreBound = "1";
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var card = btn.closest(".project-card");
        modal.open(parseInt(card.dataset.index, 10));
      });
    });
  }

  function initModal(list) {
    var modal = document.getElementById("projectModal");
    if (!modal) return { open: function () {} };
    var modalThumbs = document.getElementById("modalThumbs");
    var modalDisplay = document.getElementById("modalDisplay");
    var currentIndex = 0;

    modalThumbs.innerHTML = "";
    list.forEach(function (p, i) {
      var t = document.createElement("button");
      t.className = "modal-thumb";
      t.textContent = pad2(i + 1);
      t.setAttribute("aria-label", p.judul);
      t.addEventListener("click", function () { render(i); });
      modalThumbs.appendChild(t);
    });

    function render(i) {
      if (!list.length) return;
      currentIndex = (i + list.length) % list.length;
      var p = list[currentIndex];
      var rarityClass = (global.RARITY_CLASS && global.RARITY_CLASS[p.rarity]) || "r-common";

      document.getElementById("modalRarity").textContent = p.rarity;
      document.getElementById("modalRarity").className = "project-rarity " + rarityClass;

      var glyphEl = document.getElementById("modalGlyph");
      if (glyphEl) glyphEl.textContent = pad2(currentIndex + 1);
      var modalImg = modalDisplay.querySelector(".modal-img");
      if (p.gambar) {
        if (!modalImg) {
          modalImg = document.createElement("img");
          modalImg.className = "modal-img";
          modalDisplay.insertBefore(modalImg, modalDisplay.querySelector(".modal-zoom"));
        }
        modalImg.src = p.gambar;
        modalImg.alt = p.judul;
        modalImg.onerror = function () { this.remove(); };
      } else if (modalImg) {
        modalImg.remove();
      }

      document.getElementById("modalCategory").textContent = p.kategori || "Project";
      document.getElementById("modalTitle").textContent = p.judul;
      document.getElementById("modalDesc").textContent = p.desc;
      document.getElementById("modalCounter").textContent = (currentIndex + 1) + " / " + list.length;

      var tagsWrap = document.getElementById("modalTags");
      tagsWrap.innerHTML = "";
      (p.tags || []).forEach(function (tag) {
        var s = document.createElement("span");
        s.textContent = tag;
        tagsWrap.appendChild(s);
      });

      var linksWrap = document.getElementById("modalLinks");
      linksWrap.innerHTML =
        '<a href="' + esc(p.demo || "#") + '" target="_blank" rel="noopener">Live Demo</a>' +
        '<a href="' + esc(p.source || "#") + '" target="_blank" rel="noopener">Source Code</a>';

      var combosWrap = document.getElementById("modalCombos");
      combosWrap.innerHTML = "";
      (p.fitur || []).forEach(function (feat, idx) {
        var item = document.createElement("div");
        item.className = "combo-item";
        item.innerHTML = '<span class="combo-ico">' + (idx + 1) + '</span><span class="txt">' + esc(feat) + '</span>';
        combosWrap.appendChild(item);
      });

      modalDisplay.classList.remove("zoomed");
      Array.prototype.forEach.call(modalThumbs.children, function (el, idx) {
        el.classList.toggle("active", idx === currentIndex);
      });
    }

    function open(i) {
      render(i);
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    if (!modal.dataset.bound) {
      modal.dataset.bound = "1";
      document.getElementById("modalClose").addEventListener("click", close);
      document.getElementById("modalPrev").addEventListener("click", function () { render(currentIndex - 1); });
      document.getElementById("modalNext").addEventListener("click", function () { render(currentIndex + 1); });
      document.getElementById("modalZoom").addEventListener("click", function () { modalDisplay.classList.toggle("zoomed"); });
      modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
      document.addEventListener("keydown", function (e) {
        if (!modal.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") render(currentIndex - 1);
        if (e.key === "ArrowRight") render(currentIndex + 1);
      });
    }

    return { open: open };
  }

  function mountProjects(containerEl, gridList, modalList) {
    renderProjectGrid(containerEl, gridList);
    var modal = initModal(modalList || gridList);
    attachTilt(containerEl);
    attachPauseButtons(containerEl);
    attachExploreButtons(containerEl, gridList, modal);
    return modal;
  }

  global.ProjectsUI = {
    renderProjectGrid: renderProjectGrid,
    attachTilt: attachTilt,
    resetAllTilts: resetAllTilts,
    attachPauseButtons: attachPauseButtons,
    attachExploreButtons: attachExploreButtons,
    initModal: initModal,
    mountProjects: mountProjects,
    esc: esc,
    pad2: pad2
  };
})(window);
