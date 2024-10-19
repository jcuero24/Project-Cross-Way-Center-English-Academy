import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProgramasComponent } from './components/programas/programas.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programas', component: ProgramasComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // Redirige a inicio para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importar los módulos requeridos
  exports: [RouterModule] // Exportar el módulo de enrutamiento para usarlo en otros módulos
})
export class AppRoutingModule { }
