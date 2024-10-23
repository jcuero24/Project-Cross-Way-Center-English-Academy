import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['/src/styles.css'],
})
export class ProfesoresComponent {
  profesores = [
    { nombre: 'Juan Pablo Cuero', fotoUrl: 'assets/profesores/profesor1.jpg' },
    { nombre: 'Luis Gallego Paspur', fotoUrl: 'assets/profesores/profesor2.jpg' },
    { nombre: 'Juan Carlos Arango', fotoUrl: 'assets/profesores/profesor3.jpg' },
    { nombre: 'Juan David Cuero', fotoUrl: 'assets/profesores/profesor4.jpg' },
    { nombre: 'Laura kids', fotoUrl: 'assets/profesores/profesor5.jpg' },
    { nombre: 'Libardo Cruz', fotoUrl: 'assets/profesores/profesor6.jpg' },
    { nombre: 'Angelica', fotoUrl: 'assets/profesores/profesor7.jpg' },
    { nombre: 'Sara Revelo', fotoUrl: 'assets/profesores/profesor8.jpg' }
  ];
}
