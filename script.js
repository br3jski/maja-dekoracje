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
    const popupHeight = popupElement.clientHeight;
    const popupTop = Math.max((windowHeight - popupHeight) / 2, 0);

    popupElement.style.top = `${popupTop}px`;
}

// Funkcja do przełączania klasy popup-open na body
function toggleBodyScrolling(isPopupOpen) {
    if (isPopupOpen) {
        document.body.classList.add('popup-open');
    } else {
        document.body.classList.remove('popup-open');
    }
}

// Funkcja do zamykania popupu
function closePopup(popup) {
    popup.style.display = 'none';
    toggleBodyScrolling(false);
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
    centerPopup(servicePopup);
    servicePopup.style.display = 'block';
    toggleBodyScrolling(true);
}

services.forEach(service => {
    service.addEventListener('click', () => {
        if (servicePopup.style.display === 'block') {
            closePopup(servicePopup);
        } else {
            openServicePopup(service);
        }
    });
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

function openContactFormPopup() {
    centerPopup(contactFormPopup);
    contactFormPopup.style.display = 'block';
    toggleBodyScrolling(true);
}

openContactFormButton.addEventListener('click', () => {
    if (contactFormPopup.style.display === 'block') {
        closePopup(contactFormPopup);
    } else {
        openContactFormPopup();
    }
});

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
    if (servicePopup.style.display === 'block') {
        centerPopup(servicePopup);
    }
    if (contactFormPopup.style.display === 'block') {
        centerPopup(contactFormPopup);
    }
});