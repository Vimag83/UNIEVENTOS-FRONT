import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { PublicoService } from '../../../services/publico.service';

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

  constructor(private fb: FormBuilder, private publicoService: PublicoService) {
    this.crearFormulario();
    this.tiposDeEvento = [];
    this.ciudades = [];
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

  onFileChange(event: any, tipo: string) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if(tipo === 'portada') {
        this.crearEventoForm.patchValue({
          imagenPortada: file
        });
      } else {
        this.crearEventoForm.patchValue({
          imagenLocalidades: file
        });
      }
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
   
   
}