import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Asegúrate de que este componente exista
import { ProgramasComponent } from './components/programas/programas.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz que carga el componente Home
  { path: 'programas', component: ProgramasComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'contacto', component: ContactoComponent },
  // Redirige a la raíz para rutas no encontradas
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
