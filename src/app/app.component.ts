import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NivelesComponent } from "./components/niveles/niveles.component";
import { ProgramasComponent } from "./components/programas/programas.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NivelesComponent, ProgramasComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'cross-way-center-academy';
}
