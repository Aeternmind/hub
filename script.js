let slideIndex = 0;
let autoSlideInterval;

function showSlides(n) {
    const slides = document.getElementsByClassName('carousel-item');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ocultar todas las diapositivas
    }
    slides[slideIndex].style.display = "block"; // Mostrar solo la diapositiva actual
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

// Función para iniciar el cambio automático de diapositivas cada 5 segundos
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 7000); // Cambia de diapositiva cada 7 segundos
}

// Iniciar el carrusel al cargar la página
window.onload = function() {
    showSlides(slideIndex); // Mostrar la primera diapositiva
    startAutoSlide(); // Iniciar el cambio automático de diapositivas
};

// Detener el cambio automático cuando el usuario navega manualmente
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}
