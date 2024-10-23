import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Asegúrate de que este componente exista
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent} from './components/servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz que carga el componente Home
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  // Redirige a la raíz para rutas no encontradas
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
