import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
  @Output() estudiantesFormulario: EventEmitter<any> = new EventEmitter<any>();  
  
  formulario = this.fb.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    edad: ['',[Validators.required,Validators.min(18)]],
    correo: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    cursos: new FormArray([new FormControl()], Validators.pattern('[ A-Za-z]'))
  })
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
   
  submitForm(): void{
    console.log(this.formulario.value)
  }

  get cursos(): FormArray{
    return this.formulario.get('cursos') as FormArray;
  }

  agregarCurso(): void{
    this.cursos.push(new FormControl());
  }

  enviarFormulario(): void{
    this.estudiantesFormulario.emit(this.formulario.value);
  }
}
