import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionComponent } from './inscripcion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InscripcionComponent],
  imports: [
    CommonModule,
    FormsModule // Asegúrate de que FormsModule esté importado aquí
  ]
})
export class InscripcionModule { }
