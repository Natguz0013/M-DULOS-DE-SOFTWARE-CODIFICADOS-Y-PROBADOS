import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { EmpleadoService } from '../../service/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar FormsModule aquí
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent {
  empleado: any = {
    nombre: '',
    apellido: '',
    identificacion: '',
    cargo: '',
    salario: null,
    sucursal: ''
  };
  

  mensaje: string = '';


  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  guardarEmpleado() {
    if (!this.empleado.nombre || !this.empleado.identificacion || !this.empleado.cargo) {
      alert('Todos los campos son obligatorios');
      return;
    }
  
    this.empleadoService.createEmpleado(this.empleado).subscribe({
      next: (res) => {
        console.log('Empleado creado:', res);
        this.router.navigate(['/']); // Redirige a la lista de empleados
      },
      error: (err) => {
        console.error('Error al crear el empleado:', err);
        alert(err.error.message || 'Ocurrió un error');
      },
    });
  }
  
  
}
