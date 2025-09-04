// Evento de clique nos cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`Você abriu ${card.innerText}`);
  });
});

document.querySelector("button").addEventListener("click", () => {
  alert("Catálogo em breve!");
});
