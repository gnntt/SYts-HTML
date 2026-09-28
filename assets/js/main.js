// Sahaja Yoga Trieste — interazioni del sito
(function () {
  var root = document.documentElement;
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  // Menu mobile
  if (toggle && nav) {
    var setOpen = function (open) {
      root.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Chiudi menu" : "Apri menu");
    };
    toggle.addEventListener("click", function () {
      setOpen(!root.classList.contains("nav-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Ombra dell'header allo scroll
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Comparsa graduale delle sezioni
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  // Anno nel footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Modulo contatti: compone un'email con il client dell'utente
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = "[Sito] " + (data.get("motivo") || "Richiesta informazioni");
      var body =
        "Nome: " + (data.get("nome") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n" +
        "Telefono: " + (data.get("telefono") || "") + "\n\n" +
        (data.get("messaggio") || "");
      window.location.href =
        "mailto:info@sahajayogatrieste.it?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
