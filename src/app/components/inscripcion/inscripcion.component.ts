import { Component } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {
  inscripcion = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    curso: ''
  };

  cursos = ['Curso 1', 'Curso 2', 'Curso 3']; // Agrega aquí los nombres de los cursos disponibles.

  onSubmit() {
    // Lógica de inscripción, como enviar los datos a un backend o mostrar un mensaje de éxito.
    console.log('Inscripción enviada:', this.inscripcion);

    // Resetear el formulario después de enviar
    this.inscripcion = {
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      curso: ''
    };
  }
}
