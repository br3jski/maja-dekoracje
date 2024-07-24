const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

showSlide(currentSlide); // Pokaż pierwszy slajd na początku

setInterval(() => {
    showSlide(currentSlide + 1); // Przełączaj slajdy co 5 sekund
}, 5000);