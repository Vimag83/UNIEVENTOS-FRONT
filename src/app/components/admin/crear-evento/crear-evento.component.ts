import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { PublicoService } from '../../../services/publico.service';
import { AdministradorService } from '../../../administrador.service';
import Swal from 'sweetalert2';
import { CrearEventoDTO } from '../../../dto/eventoDTO/CrearEventoDTO';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent {


  
  crearEventoForm!: FormGroup;
  tiposDeEvento = ['Concierto', 'Teatro', 'Otro'];
  ciudades = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];
  eventos: string[] = [];
  subir: any;
  imagenPortada: any;
  imagenLocalidades: any;
  adminService: any;
  tokenService: any;
  clienteService: any;
  ordenes: any;

  constructor(private fb: FormBuilder, private publicoService: PublicoService, private administradorService: AdministradorService) {
    this.tiposDeEvento = [];
    this.ciudades = [];
    this.crearFormulario();
    this.listarCiudades();
    this.listarTipos();
    
  }

  private crearFormulario() {
    this.crearEventoForm = this.fb.group({
      nombre: ['', Validators.required],
      artista: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      tipo: ['', Validators.required],
      imagenPortada: ['', Validators.required],
      imagenLocalidades: ['', Validators.required],
      localidades: this.fb.array([])
    });
  }

  get localidades() {
    return this.crearEventoForm.get('localidades') as FormArray;
  }

  agregarLocalidad() {
    const localidadForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      capacidad: ['', Validators.required]
    });

    this.localidades.push(localidadForm);
  }

  eliminarLocalidad(index: number) {
    this.localidades.removeAt(index);
  }

  public listarTipos(){
    this.publicoService.listarTipos().subscribe({
      next: (data) => {
        this.tiposDeEvento = data.respuesta;
      },
      error: (error) => {
        console.error(error);
      },
    });
   }
   

   public listarCiudades(){
    this.publicoService.listarCiudades().subscribe({
      next: (data) => {
        this.ciudades = data.respuesta;
      },
      error: (error) => {
        console.error(error);
      },
    });
   }

   public onFileChange(event: any, tipo: string) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      tipo == 'localidades' ? (this.imagenLocalidades = file) : (this.imagenPortada = file);
    }
   }
   

  onSubmit() {
    if (this.crearEventoForm.valid) {
      console.log(this.crearEventoForm.value);
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.crearEventoForm.controls).forEach(key => {
        const control = this.crearEventoForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  public obtenerEventos(){
    this.publicoService.listarEventos().subscribe( {
      next: (data) => {
        this.eventos = data.respuesta;
      },
      error: (error) => {
        console.error(error);
   },
    
  });
   }

   public subirImagen(tipo:string){
    const formData = new FormData();
    const imagen = tipo == 'portada' ? this.imagenPortada : this.imagenLocalidades;
    const formControl = tipo == 'portada' ? 'imagenPortada' : 'imagenLocalidades';
   
   
    formData.append('imagen', imagen!);
   
   
    this.adminService.subirImagen(formData).subscribe({
      next: (data: { respuesta: any; }) => {
        this.crearEventoForm.get(formControl)?.setValue(data.respuesta);
        Swal.fire("Exito!", "Se ha subido la imagen.", "success");
      },
      error: (error: { error: { respuesta: string | undefined; }; }) => {
        Swal.fire("Error!", error.error.respuesta, "error");
      }
    }); 
}

public crearEvento(){


  const crearEventoDTO = this.crearEventoForm.value as CrearEventoDTO;
 
 
  this.adminService.crearEvento(crearEventoDTO).subscribe({
    next: (data: any) => {
      Swal.fire("Exito!", "Se ha creado un nuevo evento.", "success");
    },
    error: (error: { error: { respuesta: string | undefined; }; }) => {
      Swal.fire("Error!", error.error.respuesta, "error");
    }
  });
}

public listarHistorialOrdenesCompra(){


  const codigoCliente = this.tokenService.getCodigo();


  this.clienteService.listarHistorialCompras(codigoCliente).subscribe({
    next: (data: { respuesta: any; }) => {
      this.ordenes = data.respuesta;
    },
    error: (error: { error: { respuesta: string | undefined; }; }) => {
      Swal.fire("Error!", error.error.respuesta, "error");
    }
  });


}
}