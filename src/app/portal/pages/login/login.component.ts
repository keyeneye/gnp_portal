import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../../data/providers/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  });

  mensajeBienvenida = "Bienvenido, por favor iniciar sesion";
  correoNoExiste = false;
  passwordInvalid = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showPassword() {
    const password = document.getElementById("login_password");
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

  validarExistenciaCorreo() {
    this.mensajeBienvenida = "Bienvenido David";
    if (this.loginForm.value.email.length > 0 && this.email.valid) {
      this.loginService
        .postValidateEmail(this.loginForm.value.email)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }

  validarPassword() {}

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(["/home/general"]);
  }

  mostrarEmailPlaceholder() {
    document.getElementById("emailInput").style.color = "#acb4c0";
  }
  ocultarEmailPlaceholder() {
    if (this.email.value.length === 0) {
      document.getElementById("emailInput").style.color = "transparent";
    }
    if (this.email.errors) {
      document.getElementById("emailInput").style.color = "#9a4443";
    }
  }

  mostrarPasswordPlaceholder() {
    document.getElementById("passwordInput").style.color = "#acb4c0";
  }
  ocultarPasswordPlaceholder() {
    if (this.password.value.length === 0) {
      document.getElementById("passwordInput").style.color = "transparent";
    }
    if (this.password.errors) {
      document.getElementById("passwordInput").style.color = "#9a4443";
    }
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
}
