import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  username: string = '';
  userRole: string = '';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    // Intentar obtener el nombre de usuario, si no está disponible usar el email
    const email = this.tokenService.getEmail();
    this.username = email.split('@')[0]; // Tomamos la parte antes del @
    this.userRole = this.tokenService.getRol();
  }

  public cerrarSesion() {
    this.tokenService.logout();
  }

  public cancelar() {
    // Redirigir según el rol
    const destino = this.userRole === 'admin' ? '/admin' : '/cliente';
    this.router.navigate([destino]);
  }
}