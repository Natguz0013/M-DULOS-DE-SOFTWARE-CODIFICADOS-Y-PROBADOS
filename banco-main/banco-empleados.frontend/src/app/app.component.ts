import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  standalone: true, // Declaración para componentes independientes
  imports: [RouterOutlet], // Importa RouterOutlet para manejar las rutas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Estilos asociados al componente
  
})
export class AppComponent implements AfterViewInit {
  title = 'banco-empleados.frontend';

  ngAfterViewInit(): void {
    // Inicializa los componentes de Materialize
    if (typeof M !== 'undefined' && M.AutoInit) {
      M.AutoInit();
    } else {
      console.error('Materialize no está disponible o no está correctamente inicializado.');
    }
  }
}
