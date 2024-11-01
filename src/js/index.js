document.getElementById('gerarCodigo').addEventListener('click', function () {
    const codigoPix = "00020126850014BR.GOV.BCB.PIX01361ccf5854-1abf-4586-a1a8-13a9b63378d00223Compre seu cash seguro.5204000053039865802BR5923Douglas de Sales Santos6009SAO PAULO61080540900062240520p2jONxnQrhAvmiU3ftc563045BF8";
    document.getElementById('codigoPix').value = codigoPix;
    alert("Código PIX gerado e exibido na caixa de texto.");
});

document.getElementById('whatsappButton').addEventListener('click', function () {
    const numeroWhatsApp = "351967467278";
    const codigoPix = document.getElementById('codigoPix').value;
    const mensagem = `Olá, estou enviando o pagamento via PIX. Segue o código:\n${codigoPix}\nEnvio também a imagem conforme solicitado.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    document.getElementById('whatsappButton').setAttribute('href', url);
});

// Script para o menu responsivo
document.getElementById('menuToggle').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});