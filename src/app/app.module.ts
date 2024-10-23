import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// Importa otros componentes según sea necesario

@NgModule({
  declarations: [
    // Otros componentes aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    AppComponent,
  ],
  bootstrap: []
})
export class AppModule { }
