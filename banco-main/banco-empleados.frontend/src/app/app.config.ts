import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configura las rutas globales
    provideHttpClient() // Proporciona HttpClientModule para solicitudes HTTP
  ]
};
