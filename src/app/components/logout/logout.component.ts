import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private tokenService:TokenService){

  }

  public cerrarSesion(){
    this.tokenService.logout();
  }


}
