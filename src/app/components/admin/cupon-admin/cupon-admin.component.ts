import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cupon-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cupon-admin.component.html',
  styleUrls: ['./cupon-admin.component.css']
})
export class CuponAdminComponent {
  cupones = [
    {
      codigo: 'NUEVO2024',
      descuento: '15 %',
      expiracion: '08/09/2024',
      tipo: 'Único',
      uso: '25/100',
      estado: 'Activo'
    },
    {
      codigo: 'CURA2024',
      descuento: '20 %',
      expiracion: '29/08/2024',
      tipo: 'Individual',
      uso: '75/100',
      estado: 'Inactivo'
    }
  ];

  historialCupones = [
    {
      codigo: 'NUEVO2024',
      usuario: 'Armando Casas',
      fechaUso: '28/08/2024',
      evento: 'Concierto de Rock al Parque'
    },
    {
      codigo: 'CURA2024',
      usuario: 'Ananias Lucumi',
      fechaUso: '19/08/2024',
      evento: 'Concierto Banda Cura Metal'
    }
  ];

  crearCupon() {
    // Implementar lógica para crear cupón
  }

  eliminarCupon(codigo: string) {
    if(confirm('¿Está seguro que desea eliminar este cupón?')) {
      // Implementar lógica para eliminar cupón
    }
  }

  editarCupon(codigo: string) {
    // Implementar lógica para editar cupón
  }
}