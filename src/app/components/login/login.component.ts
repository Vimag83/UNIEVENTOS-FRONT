import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí irá la lógica de autenticación
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Por ahora solo navegamos a inicio
    this.router.navigate(['/admin']);
  }

}
