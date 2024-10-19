import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
// Importa otros componentes según sea necesario

@NgModule({
  declarations: [
    InscripcionComponent,
    // Otros componentes aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  bootstrap: []
})
export class AppModule { }
