import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: '/src/styles.css' 
})
export class ContactoComponent {
  contactForm = {
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    mensaje: ''
  };

  successMessage: string = ''; // Nueva propiedad para el mensaje de éxito

  constructor() {
    emailjs.init('2MUowbrWGE4htzLLK'); // Tu Public Key
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evitar que la página se recargue

    emailjs.send('service_xtwmq2k', 'template_cmj5odv', {
      nombre: this.contactForm.nombre,
      apellido: this.contactForm.apellido,
      celular: this.contactForm.celular,
      email: this.contactForm.email,
      mensaje: this.contactForm.mensaje
    })
    .then((response) => {
      console.log('Formulario enviado con éxito!', response.status, response.text);
      this.successMessage = 'Formulario enviado con éxito'; // Mensaje de éxito
      // Limpiar el formulario después de enviar
      this.contactForm = {
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        mensaje: ''
      };
    }, (error) => {
      console.log('Error al enviar el formulario', error);
      this.successMessage = 'Error al enviar el formulario'; // Mensaje de error
    });
  }
}
