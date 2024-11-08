import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from './dto/mensaje-dto';
import { Observable } from 'rxjs';
import { CrearEventoDTO } from './dto/eventoDTO/CrearEventoDTO';
import { EditarEventoDTO } from './dto/eventoDTO/EditarEventoDTO';
import { CrearArtistaDTO } from './dto/artistasDTO/CrearArtistaDTO';
import { EditarArtistaDTO } from './dto/artistasDTO/EditarArtistaDTO';
import { InformacionArtistaDTO } from './dto/artistasDTO/InformacionArtistaDTO';
import { CrearCuponDTO } from './dto/cuponDTO/CrearCuponDTO';
import { EditarCuponDTO } from './dto/cuponDTO/EditarCuponDTO';
import { InformacionCuponDTO } from './dto/cuponDTO/InformacionCuponDTO';
import { ResumenCuponDTO } from './dto/cuponDTO/ResumenCuponDTO';
import { FiltroEventoDTO } from './dto/eventoDTO/FiltroEventoDTO';
import { ItemEventoDTO } from './dto/eventoDTO/ItemEventoDTO';
import { ResumenEventoDTO } from './dto/eventoDTO/ResumenEventoDTO';

@Injectable({
 providedIn: 'root'
})
export class AdministradorService {

 private adminURL = "http://localhost:8080/api/admin";


 constructor(private http: HttpClient) { }


  public listarArtistas(): Observable<MensajeDTO<InformacionArtistaDTO[]>> {
    return this.http.get<MensajeDTO<InformacionArtistaDTO[]>>(`${this.adminURL}/listar-artista`);
  }

  public buscarArtistasPorNombre(nombre: string): Observable<MensajeDTO<InformacionArtistaDTO[]>> {
    return this.http.get<MensajeDTO<InformacionArtistaDTO[]>>(`${this.adminURL}/buscar-artista/${nombre}`);
  }

  public obtenerInformacionArtista(id: string): Observable<MensajeDTO<InformacionArtistaDTO>> {
    return this.http.get<MensajeDTO<InformacionArtistaDTO>>(`${this.adminURL}/obtener-artista/${id}`);
  }

  public eliminarArtista(id: string): Observable<MensajeDTO<String>> {
    return this.http.delete<MensajeDTO<String>>(`${this.adminURL}/eliminar-artista/${id}`);
  }

  public editarArtista(artista: EditarArtistaDTO): Observable<MensajeDTO<String>> {
    return this.http.put<MensajeDTO<String>>(`${this.adminURL}/editar-artista`, artista);
  }

  public crearArtista(artista: CrearArtistaDTO): Observable<MensajeDTO<String>> {
    return this.http.post<MensajeDTO<String>>(`${this.adminURL}/crear-artista`, artista);
  }

  public crearCupon(cuponDTO: CrearCuponDTO): Observable<MensajeDTO<String>> {
    return this.http.post<MensajeDTO<String>>(`${this.adminURL}/crear-cupon`, cuponDTO);
  }

  public editarCupon(cuponDTO: EditarCuponDTO): Observable<MensajeDTO<String>> {
    return this.http.put<MensajeDTO<String>>(`${this.adminURL}/editar-cupon`, cuponDTO);
  }

  public eliminarCupon(id: string): Observable<MensajeDTO<String>> {
    return this.http.delete<MensajeDTO<String>>(`${this.adminURL}/eliminar-cupon/${id}`);
  }

  public obtenerInformacionCupon(id: string): Observable<MensajeDTO<InformacionCuponDTO>> {
    return this.http.get<MensajeDTO<InformacionCuponDTO>>(`${this.adminURL}/obtener-cupon/${id}`);
  }

  public listarCupones(): Observable<MensajeDTO<ResumenCuponDTO[]>> {
    return this.http.get<MensajeDTO<ResumenCuponDTO[]>>(`${this.adminURL}/listar-cupon`);
  }

  public buscarCuponesPorCodigo(codigo: string): Observable<MensajeDTO<ResumenCuponDTO[]>> {
    return this.http.get<MensajeDTO<ResumenCuponDTO[]>>(`${this.adminURL}/buscar-cupon/${codigo}`);
  }


 public crearEvento(crearEventoDTO: CrearEventoDTO): Observable<MensajeDTO<String>>{
   return this.http.post<MensajeDTO<String>>(`${this.adminURL}/evento/crear`, crearEventoDTO);
 }


 public editarEvento(editarEventoDTO: EditarEventoDTO):  Observable<MensajeDTO<String>> {
   return this.http.put<MensajeDTO<String>>(`${this.adminURL}/evento/editar`, editarEventoDTO);
 }



 public obtenerInformacionEvento(id: string): Observable<MensajeDTO<String>> {
   return this.http.get<MensajeDTO<String>>(`${this.adminURL}/evento/obtener/${id}`);
 }


 public eliminarEvento(id: string): Observable<MensajeDTO<String>> {
   return this.http.delete<MensajeDTO<String>>(`${this.adminURL}/evento/eliminar/${id}`);
 }


 public listarEventos(): Observable<MensajeDTO<String>> {
   return this.http.get<MensajeDTO<String>>(`${this.adminURL}/evento/obtener-todos`);
 }


 public subirImagen(imagen: FormData): Observable<MensajeDTO<String>> {
   return this.http.post<MensajeDTO<String>>(`${this.adminURL}/imagen/subir`, imagen);
 }

 public filtrarEventos(filtroDTO: FiltroEventoDTO): Observable<MensajeDTO<ItemEventoDTO[]>> {
  return this.http.post<MensajeDTO<ItemEventoDTO[]>>(`${this.adminURL}/filtrar`, filtroDTO);
}

public buscarEventosPorNombre(nombre: string): Observable<MensajeDTO<ResumenEventoDTO[]>> {
  return this.http.get<MensajeDTO<ResumenEventoDTO[]>>(`${this.adminURL}/buscar-evento/${nombre}`);
}

public agregarImagenEvento(idEvento: string, imagen: FormData): Observable<MensajeDTO<String>> {
  return this.http.post<MensajeDTO<String>>(`${this.adminURL}/agregar-imagen/${idEvento}`, imagen);
}

public agregarImagenLocalidad(idEvento: string, nombreLocalidad: string, imagen: FormData): Observable<MensajeDTO<String>> {
  return this.http.post<MensajeDTO<String>>(`${this.adminURL}/agregar-imagen-localidad/${idEvento}/${nombreLocalidad}`, imagen);
}

public generarReporteVentasHTML(idEvento: string): Observable<Blob> {
  return this.http.get(`${this.adminURL}/reporte-ventas-html/${idEvento}`, { responseType: 'blob' });
}

public generarReporteVentasPDF(idEvento: string): Observable<Blob> {
  return this.http.get(`${this.adminURL}/reporte-ventas-pdf/${idEvento}`, { responseType: 'blob' });
}

public generarReporteVentasXML(idEvento: string): Observable<Blob> {
  return this.http.get(`${this.adminURL}/reporte-ventas-xml/${idEvento}`, { responseType: 'blob' });
}


public eliminarImagen(nombreImagen: string): Observable<MensajeDTO<String>> {
  return this.http.delete<MensajeDTO<String>>(`${this.adminURL}/eliminar-imagen/${nombreImagen}`);
}




}

