import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  activeTab: string = 'datos';
  eventos = [
    {
      nombre: 'Concierto de Rock',
      fecha: '14/07/2022',
      ubicacion: 'Estadio Centenario',
      precio: 150000,
      capacidad: 30000,
      tipo: 'Concierto',
      estado: 'Terminado'
    },
    // ... más eventos
  ];

  adminData = {
    cedula: '12345874',
    nombreCompleto: 'Admin 1',
    direccion: 'Essos',
    telefono: '12345852',
    correo: 'admin@email.com',
    nuevaContrasena: '',
    confirmarContrasena: ''
  };

   // Método para gestionar la navegación activa
   isActive(route: string): boolean {
    return window.location.pathname.includes(route);
  }
}