import { Routes } from '@angular/router';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosFormComponent } from './components/empleados-form/empleados-form.component';

export const routes: Routes = [
  { path: '', component: EmpleadosListComponent }, // Ruta raíz (Lista de empleados)
  { path: 'form', component: EmpleadosFormComponent }, // Ruta para agregar empleados
];
