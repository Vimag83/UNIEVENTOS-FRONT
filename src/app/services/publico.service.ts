import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/MensajeDTO';
import { Observable } from 'rxjs';
import { FiltroEventoDTO } from '../dto/eventoDTO/FiltroEventoDTO';

@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "http://localhost:8081/api/publico";

  constructor(private http: HttpClient) { }

  public listarTipos(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/evento/listar-tipos`);
  }
 
 
  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/evento/obtener-ciudades`);
  }
 
 
  public obtenerEvento(id: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/evento/obtener/${id}`);
  }

   // Métodos para eventos
   public obtenerInformacionEvento(id: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-info-evento/${id}`);
  }

  public listarEventos(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-eventos`);
  }

  public filtrarEventos(filtroDTO: FiltroEventoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/filtrar-eventos`, filtroDTO);
  }

  public buscarEventosPorNombre(nombre: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/buscar-evento/${nombre}`);
  }

  // Métodos para ordenes y notificaciones
  public recibirNotificacionMercadoPago(request: Map<string, any>): Observable<void> {
    return this.http.post<void>(`${this.publicoURL}/orden/recibir-notificacion`, request);
  }

  // Métodos para tipos de evento
  public listarTiposEvento(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/evento/listar-tipos`);
  }
 
}
