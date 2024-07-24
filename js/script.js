document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2021-12-29T00:00:00');
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${years} años, ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Mostrar el formulario de inicio de sesión
    document.getElementById('login-section').style.display = 'block';
    // Inicialmente ocultar el contenido principal
    document.getElementById('content-section').style.display = 'none';
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const correctUsername = '1'; // Nombre de usuario correcto
    const correctPassword = '1'; // Contraseña correcta

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
    } else {
        errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        login();
    }
}

function showLetter() {
    var letter = document.getElementById('letter-content');
    var envelope = document.getElementById('closed-envelope');
    var envelopeOpening = document.getElementById('opening-envelope');
    
    // Cambia la visibilidad del contenido de la carta
    letter.classList.toggle('show');
    
    if (letter.classList.contains('show')) {
        // Mostrar la carta abierta y ocultar la carta cerrada
        envelope.style.display = 'none';
        envelopeOpening.style.display = 'block';
    } else {
        // Mostrar la carta cerrada y ocultar la carta abierta
        envelope.style.display = 'block';
        envelopeOpening.style.display = 'none';
    }
}

// Asegúrate de que la función `showLetter()` se llame al hacer clic en la imagen de la carta
document.getElementById('closed-envelope').addEventListener('click', showLetter);

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('content-section').style.display = 'none';
}
