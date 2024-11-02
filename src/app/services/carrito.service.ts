import { Injectable } from '@angular/core';
import { AgregarAlCarritoDTO } from '../dto/ordenDTO/AgregarAlCarritoDTO';
import { ResumenCarritoDTO } from '../dto/carritoDTO/ResumenCarritoDTO';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // Podemos usar un Map para mantener los carritos por usuario
  private carritos: Map<string, ResumenCarritoDTO[]>;

  constructor() {
    this.carritos = new Map<string, ResumenCarritoDTO[]>();
  }

  //public agregarAlCarrito(agregarAlCarritoDTO: AgregarAlCarritoDTO): string {
    //const idCuenta = agregarAlCarritoDTO.idCuenta;
    
    // Inicializar el carrito si no existe
//    if (!this.carritos.has(idCuenta)) {
  //    this.carritos.set(idCuenta, []);
    }

    // Obtener el carrito actual
    //const carritoActual = this.carritos.get(idCuenta)!;
    
    // Agregar el nuevo item
    //const nuevoItem = {...agregarAlCarritoDTO} as ResumenCarritoDTO;
    //carritoActual.push(nuevoItem);
    
    //return nuevoItem.id;
 // }

  //public eliminarDelCarrito(idCuenta: string, idEntrada: string): void {
    //if (!this.carritos.has(idCuenta)) {
      throw new Error('Carrito no encontrado');
    //}

    //const carritoActual = this.carritos.get(idCuenta)!;
  //  const carritoActualizado = carritoActual.filter(item => item.idEntrada !== idEntrada);
    
    //this.carritos.set(idCuenta, carritoActualizado);
  //}

  //public listarCarrito(idCuenta: string): ResumenCarritoDTO[] {
    //const carrito = this.carritos.get(idCuenta);
    
    //if (!carrito) {
   //   return [];
    //}

    //return carrito;
  //}
//}