import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControlOptions } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  
  registroForm!: FormGroup;  

  constructor(private formBuilder: FormBuilder) { 

    this.crearFormulario();

  }

  private crearFormulario() {

    

    this.registroForm = this.formBuilder.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]],
      confirmaPassword: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]]
    }, 
    { validators: this.passwordsMatchValidator } as AbstractControlOptions
  )
   }

   passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmaPassword = formGroup.get('confirmaPassword')?.value;   
   
    // Si las contraseñas no coinciden, devuelve un error, de lo contrario, null
    return password == confirmaPassword ? null : { passwordsMismatch: true };
   }
   

   public registrar() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
    } else {
      console.log('Formulario inválido');
    }
 }
 
   

}
