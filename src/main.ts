import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { environment } from './environments/environment'; 
import { FormsModule } from '@angular/forms';
import { AppModule} from './app/app.module'

// Activa el modo de producción si es necesario
if (environment.production) {
  enableProdMode();
}

// Inicia la aplicación
//bootstrapApplication(AppModule).catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule, FormsModule) // Importa las rutas aquí
  ]
}).catch(err => console.error(err));

