document.addEventListener("DOMContentLoaded", function () {
  /* ============================================================
     MENU MOBILE
     ============================================================ */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function (event) {
      navMenu.classList.toggle("active");
      event.stopPropagation();
    });

    // Fecha ao clicar fora
    document.addEventListener("click", function (event) {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(event.target) &&
        event.target !== menuToggle
      ) {
        navMenu.classList.remove("active");
      }
    });

    // Fecha ao clicar num link do menu
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }

  /* ============================================================
     EFEITO LETRAS JAPONESAS
     ============================================================ */
  const letras = "英雄千禧年最好的";

  const cores = [
    "#ff4fd8", // rosa
    "#00ff88", // verde
    "#ffff00", // amarelo
    "#ff3b3b", // vermelho
    "#3399ff", // azul
    "#ff8c00", // laranja
  ];

  const quantidade = 10;
  const container = document.getElementById("efeito-letras");

  if (container) {
    for (let i = 0; i < quantidade; i++) {
      const el = document.createElement("div");
      el.classList.add("letra-jp");

      const char = letras[Math.floor(Math.random() * letras.length)];
      el.innerText = char;
      el.setAttribute("data-char", char);

      const colunas = 10;
      const larguraCol = 100 / colunas;
      const coluna = Math.floor(Math.random() * colunas);
      const offset = Math.random() * larguraCol;

      el.style.left = coluna * larguraCol + offset + "vw";
      el.style.animationDuration = 12 + Math.random() * 6 + "s";
      el.style.animationDelay = Math.random() * 10 + "s";
      el.style.color = cores[Math.floor(Math.random() * cores.length)];

      container.appendChild(el);
    }
  }

  /* ============================================================
     GERAR CÓDIGO PIX
     ============================================================ */
  const btnGerar = document.getElementById("gerarCodigo");
  const campoPix = document.getElementById("codigoPix");

  if (btnGerar && campoPix) {
    btnGerar.addEventListener("click", function () {
      const codigoPix =
        "00020126850014BR.GOV.BCB.PIX01361ccf5854-1abf-4586-a1a8-13a9b63378d00223Compre seu cash seguro.5204000053039865802BR5923Douglas de Sales Santos6009SAO PAULO61080540900062240520p2jONxnQrhAvmiU3ftc563045BF8";
      campoPix.value = codigoPix;
      alert("Código PIX gerado e exibido na caixa de texto.");
    });
  }

  /* ============================================================
     BOTÃO WHATSAPP
     ============================================================ */
  const whatsappBtn = document.getElementById("whatsappButton");

  if (whatsappBtn && campoPix) {
    whatsappBtn.addEventListener("click", function () {
      const numeroWhatsApp = "5534991671917";
      const codigoPix = campoPix.value;
      const mensagem = `Olá, estou enviando o pagamento via PIX. Segue o código:\n${codigoPix}\nEnvio também a imagem conforme solicitado.`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      whatsappBtn.setAttribute("href", url);
    });
  }

  /* ============================================================
     CARROSSEL
     ============================================================ */
  const carouselInner = document.querySelector(".carousel-inner");
  const images = carouselInner ? carouselInner.querySelectorAll("img") : [];
  const totalImages = images.length;
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  function updateCarousel() {
    images.forEach(function (image) {
      image.classList.add("thumbnail");
      image.classList.remove("main-image");
    });

    if (images[currentIndex]) {
      images[currentIndex].classList.add("main-image");
      images[currentIndex].classList.remove("thumbnail");
    }

    if (carouselInner) {
      carouselInner.style.transform = `translateX(-${currentIndex * 10}%)`;
    }
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      currentIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextButton.addEventListener("click", function () {
      currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    });
  }

  images.forEach(function (image, index) {
    image.addEventListener("click", function () {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();

  /* ============================================================
     FECHAR MODAL COM ESC
     ============================================================ */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fecharModal();
  });
});

/* ============================================================
   MODAL — funções globais (chamadas via onclick no HTML)
   ============================================================ */
function abrirModal() {
  const modal = document.getElementById("modalImagem");
  if (modal) modal.style.display = "flex";
}

function fecharModal() {
  const modal = document.getElementById("modalImagem");
  if (modal) modal.style.display = "none";
}
