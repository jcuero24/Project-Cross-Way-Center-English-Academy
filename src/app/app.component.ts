import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: '/src/assets/css/main.css',  
})
export class AppComponent {
  
  testimonials = [
    { img: 'assets/img/testimonials/cc4.jpeg', name: 'Christian Cuero', title: 'Mg. en Traducción e Interpretación, Profesor', review: 'Mi experiencia en la Academia Cross Way Center fue muy positiva. Comencé a estudiar desde los trece años, pasando por todos los niveles hasta los avanzados, lo que me permitió ingresar a la licenciatura en lenguas extranjeras con un buen dominio del inglés. Esto me dio la oportunidad de enfocarme en el francés y otras materias, logrando destacarme en la carrera, incluso ocupando el primer puesto. Además, tuve la suerte de enseñar en la Academia desde los primeros semestres, lo que me permitió aplicar lo aprendido y ganar experiencia. A lo largo de mi formación, también aprendí la importancia de la puntualidad y la responsabilidad. Gracias a la preparación que recibí en Cross Way Center, pude continuar mi desarrollo profesional, trabajar en la universidad y tener buenos ingresos, lo que me permitió cumplir algunos de mis sueños. Fue un gran comienzo para mi vida laboral.' },
    { img: 'assets/img/testimonials/dv.jpeg', name: 'Diana Villagómez', title: 'Administradora de Empresas, vive en USA', review: 'La academia de inglés la recomiendo al 💯 ya que ofrece una amplia variedad de cursos para diferentes niveles de habilidad, desde principiantes hasta avanzados. Sus instalaciones están bien equipadas, proporcionando un ambiente cómodo para el aprendizaje. Los instructores son están bien calificados y muestran entusiasmo por la enseñanza, lo que puede ser motivador para los estudiantes.' },
    { img: 'assets/img/testimonials/ac.jpeg', name: 'Angela Córdoba', title: 'Profesora, vive en USA', review: 'Mi experiencia en la academia fue muy positiva. Tuve clases interactivas que me permitieron aprender de manera dinámica y entretenida. El enfoque práctico que me brindaron los profesores me ha sido de gran ayuda, ya que pude aplicar los conocimientos adquiridos directamente en mi trabajo diario. Como profesora, aprendí no solo a enseñar de forma efectiva, sino también a comunicarme con fluidez y confianza en el inglés, lo cual fue clave para mi desarrollo profesional. Gracias a la sólida formación que recibí en la academia, ahora vivo en Estados Unidos, donde mi carrera ha avanzado mucho más. Sin duda, la academia fue el punto de partida para todo lo que he logrado.' },
    { img: 'assets/img/testimonials/ra.jpeg', name: 'Reinaldo Areiza', title: 'Politólogo', review: 'Cross Way Center ha transformado mi aprendizaje del inglés. Con profesores dedicados y una metodología práctica, cada clase es una experiencia enriquecedora. No solo he mejorado mi nivel, sino que también he ganado confianza para comunicarme en cualquier contexto. ¡Recomiendo Cross Way Center a quienes buscan resultados reales!' },
    { img: 'assets/img/testimonials/sh.jpeg', name: 'Santiago Hernández', title: 'Estudiante', review: 'El proceso en CrossWay Center fue excepcional de principio a fin, en el transcurso  de los niveles se brindó cada material, herramienta y espacio para el correcto aprendizaje, la calidad de maestros y las temáticas impartidas fueron impecables, cualquier tipo de duda fue resuelta en su momento y la atención que los docentes prestaban a cada proceso de cada estudiante fue muy bueno, ello demostró el compromiso que se tiene con cada individuo.' },
    { img: 'assets/img/testimonials/mc.jpeg', name: 'Melissa Cuero', title: 'Ingeniera Civil', review: 'Cross Way Center es la mejor academia de inglés de Tuluá y sus alrededores. Estudié allí cuando tenía 14 años de edad y, 16 años después sigo recomendándola como desde el primer día. Te sientes rodeado de calor humano todo el tiempo, los docentes son de muy alto nivel y prestigio. Me gusta mucho la metodología que utilizan y el acompañamiento durante todo tú proceso. Estoy muy agradecida por todo el aprendizaje que obtuve en ese lugar. Espero que continúe por muchos años más.' },
    { img: 'assets/img/testimonials/ah.jpeg', name: 'Andres Hinestroza', title: 'Estudiante', review: 'A mí me gustó estudiar inglés por varias razones. Primero, la enseñanza que ofrecen en la academia es excelente. Los profesores son muy buenos, siempre responden todas las dudas que tenemos, lo cual nos ayuda a comprender mejor el inglés. Además, los ejercicios que realizamos durante las clases son muy útiles, ya que no solo refuerzan nuestros conocimientos, sino que también nos divierten. Sin duda, todo esto contribuye a un aprendizaje más efectivo.' },
  ];


  faqs = [
    {
      question: '¿Qué niveles de inglés ofrecen?',
      answer: 'Ofrecemos un programa de inglés de 12 niveles, desde principiantes hasta avanzados. Cada nivel tiene una duración de 4 semanas en modalidad presencial.',
      active: false,
    },
    {
      question: '¿Cuáles son los horarios de las clases?',
      answer: 'Nuestras clases se imparten en horarios diurnos, nocturnos y los fines de semana, para adaptarnos a tus necesidades.',
      active: false,
    },
    {
      question: '¿Cuál es el costo de los cursos?',
      answer: 'La matrícula es de $100,000 y cada nivel cuesta $240,000. También ofrecemos clases personalizadas a $35,000 por hora.',
      active: false,
    },
    {
      question: '¿Cómo puedo inscribirme?',
      answer: 'Las inscripciones están abiertas todo el año. Puedes inscribirte en nuestra sede ubicada en Calle 34 #20-41, Tuluá, o llamando al 3173798422.',
      active: false,
    },
  ];

  contactForm = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  };

  successMessage: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor() {
    emailjs.init('2MUowbrWGE4htzLLK'); // Cambia 'YOUR_USER_ID' por tu User ID de EmailJS
  }
 

  toggleFAQ(item: any) {
    item.active = !item.active; // Cambia el estado activo de la pregunta
  }

  onSubmit() {
    this.loading = true; // Mostrar loading
    emailjs.send('service_xtwmq2k', 'template_cmj5odv', {
      nombre: this.contactForm.nombre,
      email: this.contactForm.email,
      asunto: this.contactForm.asunto,
      mensaje: this.contactForm.mensaje,
    })
    .then(
      (response) => {
        console.log('Formulario enviado con éxito!', response.status, response.text);
        this.successMessage = 'Formulario enviado con éxito';
        this.errorMessage = ''; // Limpiar mensaje de error
        this.loading = false; // Ocultar loading
        // Limpiar el formulario
        this.contactForm = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: '',
        };
      },
      (error) => {
        console.log('Error al enviar el formulario', error);
        this.errorMessage = 'Error al enviar el formulario'; // Mensaje de error
        this.successMessage = ''; // Limpiar mensaje de éxito
        this.loading = false; // Ocultar loading
      }
    );
  }
}
