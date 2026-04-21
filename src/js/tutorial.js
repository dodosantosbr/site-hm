/* ============================================================
   HERO MILLENIUM — tutorial.js
   JS compartilhado por tutorial1, tutorial2, tutorial3
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ============================================================
     EFEITO LETRAS JAPONESAS
     ============================================================ */
  const letras = "英雄千禧年最好的";

  const cores = [
    "#ff4fd8",
    "#00ff88",
    "#ffff00",
    "#ff3b3b",
    "#3399ff",
    "#ff8c00",
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
});
