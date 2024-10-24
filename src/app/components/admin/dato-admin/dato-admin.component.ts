import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dato-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dato-admin.component.html',
  styleUrls: ['./dato-admin.component.css']
})
export class DatoAdminComponent {
  adminData = {
    cedula: '12345874',
    nombreCompleto: 'Admin 1',
    direccion: 'Essos',
    telefono: '12345852',
    correo: 'admin@email.com',
    nuevaContrasena: '',
    confirmarContrasena: ''
  };
}