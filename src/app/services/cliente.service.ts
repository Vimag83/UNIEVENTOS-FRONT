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
    return this.http.post<MensajeDTO>(`${this.clienteURL}/agregar-carrito`, agregarAlCarritoDTO);
  }

  public eliminarDelCarrito(idCuenta: string, idEntrada: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.clienteURL}/eliminar-carrito/${idCuenta}/${idEntrada}`);
  }

  public listarCarrito(idCuenta: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/listar-carrito/${idCuenta}`);
  }

  // Métodos para deseos
  public agregarDeseo(deseoDTO: AgregarDeseoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/agregar-deseo`, deseoDTO);
  }

  public eliminarDeseo(idCuenta: string, idEvento: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.clienteURL}/eliminar-deseo/${idCuenta}/${idEvento}`);
  }

  public listarDeseos(idCuenta: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/listar-deseo/${idCuenta}`);
  }

  public buscarDeseos(idCuenta: string, nombreEvento: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/buscar-deseo/${idCuenta}/${nombreEvento}`);
  }

  // Métodos para eventos
  public obtenerInformacionEvento(id: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/obtener-info-evento/${id}`);
  }

  public listarEventos(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/listar-eventos`);
  }

  public filtrarEventos(filtroDTO: FiltroEventoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/filtrar-eventos`, filtroDTO);
  }

  public buscarEventosPorNombre(nombre: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/buscar-evento/${nombre}`);
  }

  public enviarNotificaciones(): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/enviar-notificaciones`, {});
  }

  // Métodos para órdenes y pagos
  public realizarPago(idOrden: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/realizar-pago`, null, {
      params: { idOrden: idOrden }
    });
  }

  public aplicarDescuento(idCuenta: string, codigoDescuento: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/aplicar-descuento/${idCuenta}`, null, {
      params: { codigoDescuento: codigoDescuento }
    });
  }

  public generarOrdenCompra(idCuenta: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/generar-orden/${idCuenta}`, {});
  }

  public confirmarPago(idOrden: string, codigoConfirmacion: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/confirmar-pago/${idOrden}`, null, {
      params: { codigoConfirmacion: codigoConfirmacion }
    });
  }

  public buscarCuponesUtilizadosPorUsuario(idUsuario: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/cupones-utilizados/${idUsuario}`);
  }

  public recibirNotificacionMercadoPago(request: Map<string, any>): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/notificacion-mercadopago`, request);
  }

  // Métodos para valoraciones
  public listarValoracionByNombre(nombre: string): Observable<MensajeDTO> {
   return this.http.get<MensajeDTO>(`${this.clienteURL}/listar-valoracion/${nombre}`);
  }

 // public crearValoracion(valoracion: Valoracion): Observable<MensajeDTO> {
   // return this.http.post<MensajeDTO>(`${this.clienteURL}/crear-valoracion`, valoracion);
  //}

  public obtenerValoracionByUsuarioID(usuarioId: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/obtener-valoracion/${usuarioId}`);
  }
}
