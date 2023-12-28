import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Funcionario>

  FuncionarioForm!: FormGroup;
  
  constructor(){
      
  }
  
  ngOnInit(): void {
      this.FuncionarioForm = new FormGroup({
        id: new FormControl(0),
        nome: new FormControl(''),
        sobrenome: new FormControl(''),
        departamento: new FormControl(''),
        turno: new FormControl(''),
        ativo: new FormControl(true),
        dataDeCriacao: new FormControl(new Date()),
        dataDeAlteracao: new FormControl(new Date()),
      })  
  }

  submit(){
    console.log(this.FuncionarioForm.value)

    this.onSubmit.emit(this.FuncionarioForm.value);
  }

}
