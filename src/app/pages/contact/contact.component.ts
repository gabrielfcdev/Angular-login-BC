import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nome:string;
  email:string;
  mensagem:string;
  mensagemEnvio:string;
  constructor() {
    this.nome="";
    this.email="";
    this.mensagem="";
    this.mensagemEnvio="";
    
  }
  enviarFormulario():void{
    console.log(this.nome)
    console.log(this.email)
    console.log(this.mensagem)
  }
  btnEnviarFormulario():void{
   if(this.nome && this.email && this.mensagem ) {
    this.mensagemEnvio="Mensagem Enviada com sucesso!"
   }else {
    this.mensagemEnvio = "Mensagem não enviada! Preencha todos os campos corretamente."
   }
  }
}
