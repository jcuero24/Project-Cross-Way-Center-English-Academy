import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // Redirige a inicio para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importar los módulos requeridos
  exports: [RouterModule] // Exportar el módulo de enrutamiento para usarlo en otros módulos
})
export class AppRoutingModule { }
