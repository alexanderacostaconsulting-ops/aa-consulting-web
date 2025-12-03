// ===========================================
//  SCRIPT PRINCIPAL - ALEXANDER ACOSTA CONSULTING
// ===========================================
//  Este archivo contiene únicamente funciones básicas
//  necesarias para un menú responsivo y cualquier
//  interacción ligera del sitio.
// ===========================================

// MENU HAMBURGUESA (versión móvil)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// CERRAR MENÚ AL HACER CLIC EN UN ENLACE (MÓVIL)
const navLinks = document.querySelectorAll('#navMenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// SUAVIZAR SCROLL PARA LOS ENLACES DE NAVEGACIÓN
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
