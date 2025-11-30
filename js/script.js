/* =========================================
   1. STICKY HEADER (Fondo oscuro al bajar)
   ========================================= */
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    // Si bajamos más de 100px, añade la clase "sticky"
    header.classList.toggle("sticky", window.scrollY > 100);
});

/* =========================================
   2. SCROLL SPY (Iluminar menú según sección)
   ========================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Ajuste por la altura del header
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};

/* =========================================
   3. MENÚ MÓVIL (Hamburguesa)
   ========================================= */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

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