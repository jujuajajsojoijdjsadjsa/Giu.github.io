// Script para redireccionar al tocar cualquier parte del cuadrado de acceso directo
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('href');
    window.location.href = link;
  });
});
