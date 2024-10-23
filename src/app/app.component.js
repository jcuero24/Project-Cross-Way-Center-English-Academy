document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("back-to-top");

    // Mostrar el botón al hacer scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) { // Cambia 200 a la cantidad de scroll que desees
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // Desplazarse suavemente hacia arriba
    backToTopBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    });
});
