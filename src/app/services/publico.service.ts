import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  

 private publicoURL = "http://localhost:8080/api/publico";

  constructor(private http: HttpClient) { }

  public listarTipos(): Observable<MensajeDTO<String>> {
    return this.http.get<MensajeDTO<String>>(`${this.publicoURL}/evento/obtener-tipos`);
  }
 
 
  public listarCiudades(): Observable<MensajeDTO<String>> {
    return this.http.get<MensajeDTO<String>>(`${this.publicoURL}/evento/obtener-ciudades`);
  }
 
 
  public listarEventos(): Observable<MensajeDTO<String>> {
    return this.http.get<MensajeDTO<String>>(`${this.publicoURL}/evento/obtener-todos`);
  }
 
 
  public obtenerEvento(id: string): Observable<MensajeDTO<String>> {
    return this.http.get<MensajeDTO<String>>(`${this.publicoURL}/evento/obtener/${id}`);
  }
 

}
