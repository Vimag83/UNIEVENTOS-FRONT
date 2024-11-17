import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TokenService } from './services/token.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'UNIEVENTOS';
  isMenuOpen = false; 
  username: string = '';
  isLogged: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) {

    // Actualizar el estado después de cada navegación
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.updateLoginStatus();
  });
  }

  ngOnInit() {
    this.updateLoginStatus();
  }

  updateLoginStatus() {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      const email = this.tokenService.getEmail();
      this.username = email.split('@')[0];
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public navegar(){
    const isLogged = this.tokenService.isLogged();
    if(isLogged){
      this.router.navigate(["logout"]);
    }else{
      this.router.navigate(["login"]);
    }
  }

  footer = '© 2024 UNIEVENTOS - Todos los derechos reservados';
}
