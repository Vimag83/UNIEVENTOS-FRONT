import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgregarAlCarritoDTO } from '../dto/ordenDTO/AgregarAlCarritoDTO';
import { MensajeDTO } from '../dto/MensajeDTO';
import { AgregarDeseoDTO } from '../dto/deseoDTO/AgregarDeseoDTO';
import { FiltroEventoDTO } from '../dto/eventoDTO/FiltroEventoDTO';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteURL = "http://localhost:8081/api/cliente";

  constructor(private http: HttpClient) { }

  // Métodos para el carrito
  public agregarAlCarrito(agregarAlCarritoDTO: AgregarAlCarritoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(${this.clienteURL}/agregar-carrito, agregarAlCarritoDTO);
  }

  public eliminarDelCarrito(idCuenta: string, idEntrada: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(${this.clienteURL}/eliminar-carrito/${idCuenta}/${idEntrada});
  }

  public listarCarrito(idCuenta: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(${this.clienteURL}/listar-carrito/${idCuenta});
  }

  // Métodos para deseos
  public agregarDeseo(deseoDTO: AgregarDeseoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(${this.clienteURL}/agregar-deseo, deseoDTO);
  }

  public eliminarDeseo(idCuenta: string, idEvento: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(${this.clienteURL}/eliminar-deseo/${idCuenta}/${idEvento});
  }

  public listarDeseos(idCuenta: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(${this.clienteURL}/listar-deseo/${idCuenta});
  }

  public buscarDeseos(idCuenta: string, nombreEvento: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(${this.clienteURL}/buscar-deseo/${idCuenta}/${nombreEvento});
  }


  

}
