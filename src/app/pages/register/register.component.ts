import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
  registerComponent() {
  throw new Error('Method not implemented.');
  }
    username:string="";
    cpf:string="";
    date:string="";
    email:string="";
    password:string="";
    mensagemRegister:string="";


    constructor(private router:Router){

    }
  
    btnRegister(): void {
      if (this.username && this.cpf && this.email && this.password && this.date) {
        this.mensagemRegister = "CADASTRADO COM SUCESSO!";
        this.router.navigate(["home"]);
      } else {
        this.mensagemRegister = "CADASTRO NÃO REALIZADO! Preencha todos os campos.";
      }
    }
  }