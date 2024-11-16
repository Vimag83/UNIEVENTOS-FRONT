import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrearCuentaDTO } from '../dto/cuentaDTO/CrearCuentaDTO';
import { MensajeDTO } from '../dto/MensajeDTO';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/LoginDTO';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "http://localhost:8081/api/auth";


 constructor(private http: HttpClient) { }

 public crearCuenta(cuentaDTO: CrearCuentaDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.authURL}/crear-cuenta`, cuentaDTO);
 }
 
 
 public iniciarSesion(loginDTO: LoginDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.authURL}/iniciar-sesion`, loginDTO);
 }

}