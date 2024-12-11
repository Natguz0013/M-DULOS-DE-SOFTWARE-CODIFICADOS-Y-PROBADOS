import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-empleados-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe((data) => {
      this.empleados = data;
    });
  }

  eliminarEmpleado(id: string): void {
    if (confirm('¿Está seguro de que desea eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe(() => {
        this.obtenerEmpleados();
      });
    }
  }

  editarEmpleado(empleado: any): void {
    console.log('Editar empleado:', empleado);
  }

  navegarAlFormulario(): void {
    this.router.navigate(['/form']);
  }
}
