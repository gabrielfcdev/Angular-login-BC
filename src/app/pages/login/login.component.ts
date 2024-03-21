import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  mensagemLogin: string = "";

  constructor(private router: Router) {}

  btnLogin(): void {
    if (this.username === "admin" && this.password === "admin") {
      this.mensagemLogin = "CORRETO!";
      this.router.navigate(["home"]);
    } else {
      this.mensagemLogin = "INCORRETO!";
    }
  }

  btnRegister(): void {
    this.router.navigate(["register"]);
  }
}
