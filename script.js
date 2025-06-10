// --- Contador de Tempo de Namoro ---
// Defina a data de início do namoro (Ano, Mês - 1, Dia, Hora, Minuto, Segundo)
// Exemplo: 1º de Janeiro de 2023 às 10:00:00 -> new Date(2023, 0, 1, 10, 0, 0)
const startDate = new Date('2023-05-27T00:00:00'); // ALtere para a data que vocês começaram a namorar!

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate; // Diferença em milissegundos

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Média de dias por mês
    const years = Math.floor(days / 365.25); // Média de dias por ano (considerando anos bissextos)

    const displaySeconds = seconds % 60;
    const displayMinutes = minutes % 60;
    const displayHours = hours % 24;
    const displayDays = days % 30; // Dias do mês atual
    const displayMonths = months % 12; // Meses do ano atual

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `
            ${years} ano(s),
            ${displayMonths} mês(es),
            ${displayDays} dia(s),
            ${displayHours} hora(s),
            ${displayMinutes} minuto(s) e
            ${displaySeconds} segundo(s)
        `;
    }
}

setInterval(updateCountdown, 1000); // Atualiza a cada segundo
updateCountdown(); // Chama a função imediatamente para exibir o contador ao carregar

// --- Galeria de Fotos ---
let currentPhotoIndex = 0;
const gallery = document.querySelector('.gallery');
const photos = document.querySelectorAll('.gallery img');

function showPhoto(index) {
    if (index >= photos.length) {
        currentPhotoIndex = 0;
    } else if (index < 0) {
        currentPhotoIndex = photos.length - 1;
    } else {
        currentPhotoIndex = index;
    }
    const offset = -currentPhotoIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

function changePhoto(direction) {
    showPhoto(currentPhotoIndex + direction);
}

// Inicializa a galeria mostrando a primeira foto
document.addEventListener('DOMContentLoaded', () => {
    showPhoto(0);
});