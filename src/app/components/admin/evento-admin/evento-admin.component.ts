import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-evento-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, RouterModule],
  templateUrl: './evento-admin.component.html',
  styleUrls: ['./evento-admin.component.css']
})
export class EventoAdminComponent {
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

    {
      nombre: 'Concierto de Jazz',
      fecha: '14/07/2022',
      ubicacion: 'Estadio Centenario',
      precio: 150000,
      capacidad: 30000,
      tipo: 'Concierto',
      estado: 'Terminado'
    },

    {
      nombre: 'Regocijo Espiritual',
      fecha: '14/07/2022',
      ubicacion: 'Estadio Centenario',
      precio: 150000,
      capacidad: 30000,
      tipo: 'Otro',
      estado: 'Terminado'
    },
    // ... más eventos
  ];
}