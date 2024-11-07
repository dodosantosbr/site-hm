// Quando o documento é carregado, ativa o menu responsivo
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

// Gerar código PIX
document.getElementById('gerarCodigo').addEventListener('click', function () {
  const codigoPix = "00020126850014BR.GOV.BCB.PIX01361ccf5854-1abf-4586-a1a8-13a9b63378d00223Compre seu cash seguro.5204000053039865802BR5923Douglas de Sales Santos6009SAO PAULO61080540900062240520p2jONxnQrhAvmiU3ftc563045BF8";
  document.getElementById('codigoPix').value = codigoPix;
  alert("Código PIX gerado e exibido na caixa de texto.");
});

// Enviar mensagem no WhatsApp com o código PIX
document.getElementById('whatsappButton').addEventListener('click', function () {
  const numeroWhatsApp = "351967467278";
  const codigoPix = document.getElementById('codigoPix').value;
  const mensagem = `Olá, estou enviando o pagamento via PIX. Segue o código:\n${codigoPix}\nEnvio também a imagem conforme solicitado.`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  document.getElementById('whatsappButton').setAttribute('href', url);
});

// Funções do carrossel de imagens
let currentIndex = 0;

const carouselInner = document.querySelector('.carousel-inner');
const images = carouselInner.querySelectorAll('img');
const totalImages = images.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel() {
  images.forEach((image, index) => {
    image.classList.add('thumbnail');
    image.classList.remove('main-image');
  });

  images[currentIndex].classList.add('main-image');
  images[currentIndex].classList.remove('thumbnail');

  carouselInner.style.transform = `translateX(-${currentIndex * 10}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

updateCarousel();
