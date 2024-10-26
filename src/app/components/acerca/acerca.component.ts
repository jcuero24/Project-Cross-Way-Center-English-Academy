import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.component.html',
  styleUrl: '/src/styles.css',
})
export class AcercaComponent {
  images= [
    'cross-way-images/in-class-1.jpeg',
    'cross-way-images/in-class-2.jpeg',
    'cross-way-images/in-class-3.jpeg',
    'cross-way-images/sandra-far.jpeg',
    'cross-way-images/student1.jpeg',
    'cross-way-images/students-and-teachers.jpeg',
  ];
  
  currentSlide = 0;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia la imagen cada 3 segundos
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

}
