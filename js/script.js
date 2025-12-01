/* =========================================
   SELECTORES Y VARIABLES
   ========================================= */
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


/* =========================================
   FUNCIÓN PRINCIPAL DE SCROLL (Unificada)
   ========================================= */
window.addEventListener("scroll", () => {
    
    // 1. STICKY HEADER
    // Si bajamos más de 100px, añade la clase "sticky"
    header.classList.toggle("sticky", window.scrollY > 100);

    // 2. SCROLL SPY (Iluminar menú)
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                // Buscamos el enlace que coincida con el ID de la sección actual
                document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    // Cierre: Si el menú móvil está abierto, cerrarlo al hacer scroll
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        if (menuIcon) menuIcon.classList.remove("fa-times");
    }
});


/* =========================================
   3. MENÚ MÓVIL (Hamburguesa)
   ========================================= */

// Al hacer clic en el icono de menú
if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("fa-times"); // Cambia el icono a una "X"
        navbar.classList.toggle("active");     // Muestra/Oculta el menú
    };
}

// Al hacer clic en un enlace, cerramos el menú (útil en celular)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon) {
            menuIcon.classList.remove("fa-times");
            navbar.classList.remove("active");
        }
    });
});