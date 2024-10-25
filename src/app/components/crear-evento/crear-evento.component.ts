import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent {
  crearEventoForm!: FormGroup;
  tiposDeEvento = ['Concierto', 'Teatro', 'Otro'];
  ciudades = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
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
}