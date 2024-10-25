import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: '/src/styles.css', // Asegúrate de que sea 'styleUrls' en plural
})
export class AppComponent implements AfterViewInit {
  title = 'cross-way-center-academy';

  ngAfterViewInit() {
    const backToTopBtn = document.getElementById("back-to-top");

    // Mostrar el botón al hacer scroll
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) { // Cambia 200 a la cantidad de scroll que desees
        backToTopBtn?.classList.add("show");
      } else {
        backToTopBtn?.classList.remove("show");
      }
    });

    // Desplazarse suavemente hacia arriba
    backToTopBtn?.addEventListener("click", function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
      });
    });
  }
}
