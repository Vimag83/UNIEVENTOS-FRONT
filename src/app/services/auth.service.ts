import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrearCuentaDTO } from '../dto/cuentaDTO/CrearCuentaDTO';
import { MensajeDTO } from '../dto/MensajeDTO';
import { LoginDTO } from '../dto/LoginDTO';


interface User {
  email: string;
  name: string;
  role: 'user' | 'admin';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  private authURL = "http://localhost:808/api/auth";

  // Datos de ejemplo
  private users = [
    { email: 'user@email.com', password: 'useruser', name: 'Usuario Normal', role: 'user' as const },
    { email: 'admin@email.com', password: 'adminadmin', name: 'Administrador', role: 'admin' as const }
  ];

constructor(private htpp: HttpClient) {}


  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const { password, ...userWithoutPassword } = user;
      this.currentUserSubject.next(userWithoutPassword);
      // Guardar en localStorage para mantener la sesión
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  checkAuthentication() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }


  public crearCuenta(cuentaDTO: CrearCuentaDTO): Observable<MensajeDTO<String>> {
    return this.htpp.post<MensajeDTO<String>>(`${this.authURL}/crear-cuenta`, cuentaDTO);
   }
   

   public iniciarSesion(loginDTO: LoginDTO): Observable<MensajeDTO<String>> {
    return this.htpp.post<MensajeDTO<String>>(`${this.authURL}/iniciar-sesion`, loginDTO);
   }
   

   

}

