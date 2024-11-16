import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TokenService } from './services/token.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UNIEVENTOS';
  isMenuOpen = false; 

  constructor(private tokenService:TokenService, private router:Router){

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
