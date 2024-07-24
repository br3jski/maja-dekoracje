const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

showSlide(currentSlide);

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Funkcja do wyśrodkowania popup'a
function centerPopup(popupElement) {
    const windowHeight = window.innerHeight;
    const popupHeight = popupElement.querySelector('.popup-content').offsetHeight;
    const popupTop = Math.max((windowHeight - popupHeight) / 2, 20); // Minimum 20px od góry

    popupElement.querySelector('.popup-content').style.marginTop = `${popupTop}px`;
}

// Funkcja do otwierania popupu
function openPopup(popup) {
    closeAllPopups(); // Zamknij wszystkie otwarte popupy
    popup.style.display = 'block';
    centerPopup(popup);
}

// Funkcja do zamykania popupu
function closePopup(popup) {
    popup.style.display = 'none';
}

// Funkcja do zamykania wszystkich popupów
function closeAllPopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => closePopup(popup));
}

// --- Usługi - popup ---
const services = document.querySelectorAll('.service');
const servicePopup = document.getElementById('service-popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const servicePopupCloseButton = servicePopup.querySelector('.close-button');

function openServicePopup(service) {
    popupTitle.textContent = service.dataset.serviceTitle;
    popupDescription.textContent = service.dataset.serviceDescription;
    openPopup(servicePopup);
}

services.forEach(service => {
    service.addEventListener('click', () => openServicePopup(service));
});

servicePopupCloseButton.addEventListener('click', () => closePopup(servicePopup));

servicePopup.addEventListener('click', (event) => {
    if (event.target === servicePopup) {
        closePopup(servicePopup);
    }
});

// --- Formularz kontaktowy - popup ---
const openContactFormButton = document.getElementById('open-contact-form');
const contactFormPopup = document.getElementById('contact-form-popup');
const contactFormCloseButton = contactFormPopup.querySelector('.close-button');

openContactFormButton.addEventListener('click', () => openPopup(contactFormPopup));

contactFormCloseButton.addEventListener('click', () => closePopup(contactFormPopup));

contactFormPopup.addEventListener('click', (event) => {
    if (event.target === contactFormPopup) {
        closePopup(contactFormPopup);
    }
});

// Obsługa formularza kontaktowego
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const captchaInput = document.getElementById('captcha');
    if (captchaInput.value === '4') {
        // Tutaj możesz dodać kod do wysłania formularza
        alert('Formularz został wysłany!');
        closePopup(contactFormPopup);
        contactForm.reset();
    } else {
        alert('Nieprawidłowa odpowiedź na pytanie zabezpieczające.');
    }
});

// Dostosowanie popupu przy zmianie rozmiaru okna
window.addEventListener('resize', () => {
    const openPopup = document.querySelector('.popup[style="display: block;"]');
    if (openPopup) {
        centerPopup(openPopup);
    }
});