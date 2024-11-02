import { Injectable } from '@angular/core';
import { CrearCuponDTO } from '../dto/cuponDTO/CrearCuponDTO';
import { EditarCuponDTO } from '../dto/cuponDTO/EditarCuponDTO';
import { InformacionCuponDTO } from '../dto/cuponDTO/InformacionCuponDTO';
import { ResumenCuponDTO } from '../dto/cuponDTO/ResumenCuponDTO';


@Injectable({
  providedIn: 'root'
})
export class CuponService {

  private cupones: ResumenCuponDTO[];

  constructor() {
    this.cupones = [];
   }



}
