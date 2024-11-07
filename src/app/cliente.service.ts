import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from './dto/mensaje-dto';
import { ResumenCarritoDTO } from './dto/ordenDTO/ResumenCarritoDTO';
import { AgregarAlCarritoDTO } from './dto/ordenDTO/AgregarAlCarritoDTO';
import { AgregarDeseoDTO } from './dto/deseoDTO/AgregarDeseoDTO';
import { ResumenDeseoDTO } from './dto/deseoDTO/ResumenDeseoDTO';
import { InformacionEventoDTO } from './dto/eventoDTO/InformacionEventoDTO';
import { FiltroEventoDTO } from './dto/eventoDTO/FiltroEventoDTO';
import { ItemEventoDTO } from './dto/eventoDTO/ItemEventoDTO';
import { ResumenEventoDTO } from './dto/eventoDTO/ResumenEventoDTO';
import { ResumenCuponDTO } from './dto/cuponDTO/ResumenCuponDTO';
import { OrdenCompraDTO } from './dto/ordenDTO/OrdenCompraDTO';
import { ResumenOrdenDTO } from './dto/ordenDTO/ResumenOrdenDTO';
import { ValoracionDTO } from './dto/valoracionDTO/valoracion-dto';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteURL = 'http://localhost:8080/api/cliente';

  constructor(private http: HttpClient) { }

  public agregarAlCarrito(agregarAlCarritoDTO: AgregarAlCarritoDTO): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.clienteURL}/agregar-carrito`, agregarAlCarritoDTO);
  }

  public eliminarDelCarrito(idCuenta: string, idEntrada: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.clienteURL}/eliminar-carrito/${idCuenta}/${idEntrada}`);
  }

  public listarCarrito(idCuenta: string): Observable<MensajeDTO<ResumenCarritoDTO[]>> {
    return this.http.get<MensajeDTO<ResumenCarritoDTO[]>>(`${this.clienteURL}/listar-carrito/${idCuenta}`);
  }

  public agregarDeseo(deseoDTO: AgregarDeseoDTO): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.clienteURL}/agregar-deseo`, deseoDTO);
  }

  public eliminarDeseo(idCuenta: string, idEvento: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.clienteURL}/eliminar-deseo/${idCuenta}/${idEvento}`);
  }

  public listarDeseos(idCuenta: string): Observable<MensajeDTO<ResumenDeseoDTO[]>> {
    return this.http.get<MensajeDTO<ResumenDeseoDTO[]>>(`${this.clienteURL}/listar-deseo/${idCuenta}`);
  }

  public buscarDeseos(idCuenta: string, nombreEvento: string): Observable<MensajeDTO<ResumenDeseoDTO[]>> {
    return this.http.get<MensajeDTO<ResumenDeseoDTO[]>>(`${this.clienteURL}/buscar-deseo/${idCuenta}/${nombreEvento}`);
  }

  public obtenerInformacionEvento(id: string): Observable<MensajeDTO<InformacionEventoDTO>> {
    return this.http.get<MensajeDTO<InformacionEventoDTO>>(`${this.clienteURL}/obtener-info-evento/${id}`);
  }

  public listarEventos(): Observable<MensajeDTO<ResumenEventoDTO[]>> {
    return this.http.get<MensajeDTO<ResumenEventoDTO[]>>(`${this.clienteURL}/listar-eventos`);
  }

  public filtrarEventos(filtroDTO: FiltroEventoDTO): Observable<MensajeDTO<ItemEventoDTO[]>> {
    return this.http.post<MensajeDTO<ItemEventoDTO[]>>(`${this.clienteURL}/filtrar-eventos`, filtroDTO);
  }

  public buscarEventosPorNombre(nombre: string): Observable<MensajeDTO<ResumenEventoDTO[]>> {
    return this.http.get<MensajeDTO<ResumenEventoDTO[]>>(`${this.clienteURL}/buscar-evento/${nombre}`);
  }

  public enviarNotificaciones(): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.clienteURL}/enviar-notificaciones`, null);
  }


  public aplicarDescuento(idCuenta: string, codigoDescuento: string): Observable<MensajeDTO<ResumenOrdenDTO>> {
    return this.http.post<MensajeDTO<ResumenOrdenDTO>>(
      `${this.clienteURL}/aplicar-descuento/${idCuenta}`,
      null,
      { params: { codigoDescuento } }
    );
  }

  public generarOrdenCompra(idCuenta: string): Observable<MensajeDTO<OrdenCompraDTO>> {
    return this.http.post<MensajeDTO<OrdenCompraDTO>>(`${this.clienteURL}/generar-orden/${idCuenta}`, null);
  }

  public confirmarPago(idOrden: string, codigoConfirmacion: string): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(
      `${this.clienteURL}/confirmar-pago/${idOrden}`,
      null,
      { params: { codigoConfirmacion } }
    );
  }

  public buscarCuponesUtilizadosPorUsuario(idUsuario: string): Observable<MensajeDTO<ResumenCuponDTO[]>> {
    return this.http.get<MensajeDTO<ResumenCuponDTO[]>>(`${this.clienteURL}/cupones-utilizados/${idUsuario}`);
  }

  public recibirNotificacionMercadoPago(request: any): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.clienteURL}/notificacion-mercadopago`, request);
  }

  public listarValoracionByNombre(nombre: string): Observable<MensajeDTO<ValoracionDTO[]>> {
    return this.http.get<MensajeDTO<ValoracionDTO[]>>(`${this.clienteURL}/listar-valoracion/${nombre}`);
  }

  public crearValoracion(valoracion: ValoracionDTO): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.clienteURL}/crear-valoracion`, valoracion);
  }

  public obtenerValoracionByUsuarioID(usuarioId: string): Observable<MensajeDTO<ValoracionDTO[]>> {
    return this.http.get<MensajeDTO<ValoracionDTO[]>>(`${this.clienteURL}/obtener-valoracion/${usuarioId}`);
  }
}
