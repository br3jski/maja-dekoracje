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

const services = document.querySelectorAll('.service');
const popup = document.getElementById('service-popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description'); // Dodajemy element opisu
const closeButton = document.querySelector('.close-button');

services.forEach(service => {
    service.addEventListener('click', () => {
        popupTitle.textContent = service.dataset.serviceTitle;
        popupDescription.textContent = service.dataset.serviceDescription; // Ustawiamy treść opisu
        popup.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

const openContactFormButton = document.getElementById('open-contact-form');
const contactFormPopup = document.getElementById('contact-form-popup');
const contactFormCloseButton = contactFormPopup.querySelector('.close-button');

openContactFormButton.addEventListener('click', () => {
    contactFormPopup.style.display = 'block';
});

contactFormCloseButton.addEventListener('click', () => {
    contactFormPopup.style.display = 'none';
});