import { Injectable } from '@angular/core';
import { CrearCuentaDTO } from '../dto/cuentaDTO/CrearCuentaDTO'; 
import { EditarCuentaDTO } from '../dto/cuentaDTO/EditarCuentaDTO';
import { InformacionCuentaDTO } from '../dto/cuentaDTO/InformacionCuentaDTO';
import { ItemCuentaDTO } from '../dto/cuentaDTO/ItemCuentaDTO';
import { LoginDTO } from '../dto/LoginDTO';
import { CambiarPasswordDTO } from '../dto/CambiarPasswordDTO';
import { TokenDTO } from '../dto/TokenDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private cuentas: ItemCuentaDTO[] = [];
  private crear: CrearCuentaDTO[]=[];
  private info: InformacionCuentaDTO[];
  private editar: EditarCuentaDTO[];

  constructor(private http: HttpClient) {
    this.cuentas = [];
    this.info = [];
    this.editar = [];

  }

  public crearCuenta(crearCuentaDTO: CrearCuentaDTO) {
    this.crear.push(crearCuentaDTO);
  }

  public editarCuenta(id: string, cuenta: EditarCuentaDTO) {
    const indice = this.editar.findIndex((c) => c.id === cuenta.id);
    if (indice !== -1) {
      this.editar[indice] = cuenta;
    }
  }

  eliminarCuenta(id: string): string {
    this.cuentas = this.cuentas.filter((c) => c.id !== id);
    return 'Cuenta eliminada exitosamente';
  }

  public obtenerInformacionCuenta(id: string): InformacionCuentaDTO | undefined {
    return this.info.find(cuenta => cuenta.id === id);
   
  }

  enviarCodigoRecuperacionPassword(correo: string): string {
    return 'Código de recuperación enviado exitosamente';
  }

  cambiarPassword(cambiarPasswordDTO: CambiarPasswordDTO): string {
    return 'Contraseña cambiada exitosamente';
  }

  

  listarCuentas(): ItemCuentaDTO[] {
    return this.cuentas;
  }
}