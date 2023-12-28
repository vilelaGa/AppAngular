import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  funcionarios: Funcionario[] = []; 
  funcionariosGeral: Funcionario[] = []; 

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data =>{

      //console.log(data)

      const dados = data.dados

      dados.map((itens)=>{
        itens.dataDeCriacao = new Date(itens.dataDeCriacao!).toLocaleDateString('pt-BR');
        itens.dataDeAlteracao = new Date(itens.dataDeAlteracao!).toLocaleDateString('pt-BR');
      });

      this.funcionarios = data.dados  
      this.funcionariosGeral = data.dados  

      //console.log(dados)

    });
  }

  search(event: Event){
    console.log(event)

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase()
    
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLocaleLowerCase().includes(value)
    })

  }
}
