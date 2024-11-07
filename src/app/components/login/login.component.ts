import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginDTO } from '../../dto/LoginDTO';
import Swal from 'sweetalert2';
import { MensajeDTO } from '../../dto/mensaje-dto';
import { TokenDTO } from '../../dto/TokenDTO';



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
  errorMessage: string = '';
  loginForm: any;
  tokenService: any;

  
  constructor(private router: Router,
     private authService: AuthService) {}

  onSubmit() {
    // Aquí irá la lógica de autenticación
    if (this.authService.login(this.email, this.password)) {
      const user = this.authService.getCurrentUser();
      if (user?.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user/perfil']);
      }
    } else {
      this.errorMessage = 'Credenciales inválidas';
    }
  }


  public login() {


    const loginDTO = this.loginForm.value as LoginDTO;
   
   
    this.authService.iniciarSesion(loginDTO).subscribe({
      next: (data: MensajeDTO<TokenDTO>) => {
        this.tokenService.login(data.respuesta.token);
      },
      error: (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error.respuesta
        });
      },
    });
   
  
  }
}