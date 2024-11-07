import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { Router} from '@angular/router';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

public setToken(tokesessionStoragen: string) {
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.setItem(TOKEN_KEY, tokesessionStoragen);
}

public getToken(): string | null {
  return sessionStorage.getItem(TOKEN_KEY);
}

public isLogged(): boolean {
  if(this.getToken()) {
    return true;
  }

  return false;

}

public login(token: string) {
  this.setToken(token);
  this.router.navigate(["/"]);
}

public logout() {
  window.sessionStorage.clear();
  this.router.navigate(["/"])
  }

  private decodePayload(token: string){
    const payload = token.split('.')[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }

public getIDCuenta(): string {
  const token = this.getToken();
  if (token) {
    const values = this.decodePayload(token);
    return values.id;
}
 return "";

}

public getRol(): string {
  const token = this.getToken();
  if(token){
    const values = this.decodePayload(token);
    return values.rol;
  }
  return "";

}

}
