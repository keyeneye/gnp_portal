import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.scss'],
})
export class SeguridadComponent {
  @Output() registroCompleto = new EventEmitter();

  includeEightCharacters = false;
  includeCapitalize = false;
  includeGNP = false;
  includeConsecutiveChars = false;
  includeWhiteSpace = false;
  includeSameCharacters = false;
  includeSpecialCharacters = false;
  matchPassword = false;

  securityForm: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
    firstQuestion: ['', [Validators.required]],
    firstAnswer: ['', [Validators.required]],
    secondQuestion: ['', [Validators.required]],
    secondAnswer: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngDoCheck(): void {
    if (this.securityForm.value.password.length > 0) {
      if (this.securityForm.value.password.length >= 8) {
        this.includeEightCharacters = true;
      } else {
        this.includeEightCharacters = false;
      }
      if (
        this.securityForm.value.password.toLowerCase() ===
        this.securityForm.value.password
      ) {
        this.includeCapitalize = false;
      } else {
        this.includeCapitalize = true;
      }
      if (!this.securityForm.value.password.toLowerCase().includes('gnp')) {
        this.includeGNP = true;
      } else {
        this.includeGNP = false;
      }
      if (
        !this.consecutiveChars(this.securityForm.value.password.toLowerCase())
      ) {
        this.includeConsecutiveChars = true;
      } else {
        this.includeConsecutiveChars = false;
      }
      if (
        !this.sameCharacters(this.securityForm.value.password.toLowerCase())
      ) {
        this.includeSameCharacters = true;
      } else {
        this.includeSameCharacters = false;
      }
      if (!/\s/g.test(this.securityForm.value.password)) {
        this.includeWhiteSpace = true;
      } else {
        this.includeWhiteSpace = false;
      }
      if (/\W|_/g.test(this.securityForm.value.password)) {
        this.includeSpecialCharacters = true;
      } else {
        this.includeSpecialCharacters = false;
      }
    } else {
      this.includeCapitalize = false;
    }
    if (this.securityForm.value.confirmPassword.length > 0) {
      if (
        this.securityForm.value.password ===
        this.securityForm.value.confirmPassword
      ) {
        this.matchPassword = true;
      } else {
        this.matchPassword = false;
      }
    }
  }

  consecutiveChars(str: string) {
    let curr: any = 0;
    let prev = 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      curr = str.charCodeAt(i);
      if (
        !isNaN(parseFloat(curr)) &&
        isFinite(curr) &&
        ((curr >= 65 && curr <= 90) ||
          (curr >= 97 && curr <= 122) ||
          (curr >= 48 && curr <= 57))
      ) {
        if (count === 0) {
          ++count;
        } else if (prev + 1 === curr) {
          ++count;
          if (count === 2) {
            return true;
          }
        }
      }
      prev = curr;
    }
    return false;
  }

  sameCharacters(str: string) {
    let curr: any = 0;
    let prev = 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      curr = str.charCodeAt(i);
      if (
        !isNaN(parseFloat(curr)) &&
        isFinite(curr) &&
        ((curr >= 65 && curr <= 90) ||
          (curr >= 97 && curr <= 122) ||
          (curr >= 48 && curr <= 57))
      ) {
        if (count === 0) {
          ++count;
        } else if (prev === curr) {
          ++count;
          if (count === 2) {
            return true;
          }
        }
      }
      prev = curr;
    }
    return false;
  }

  showPasswordPlace() {
    document.getElementById("passwordPlace").style.color = "#acb4c0";
    document.getElementById("passwordValidations").style.display = "block";
  }

  showConfirmPasswordPlace() {
    document.getElementById("confirmPasswordPlace").style.color = "#acb4c0";
    document.getElementById("passwordUnmatch").style.display = "none";
  }

  showQuestionOnePlace() {
    document.getElementById("questionOnePlace").style.color = "#acb4c0";
  }

  showAnswerOnePlace() {
    document.getElementById("answerOnePlace").style.color = "#acb4c0";
  }

  showQuestionTwoPlace() {
    document.getElementById("questionTwoPlace").style.color = "#acb4c0";
  }

  showAnswerTwoPlace() {
    document.getElementById("answerTwoPlace").style.color = "#acb4c0";
  }

  hidePasswordPlace() {
    document.getElementById("passwordPlace").style.color = "transparent";
    document.getElementById("passwordValidations").style.display = "none";
  }

  hideConfirmPasswordPlace() {
    document.getElementById("confirmPasswordPlace").style.color = "transparent";
    document.getElementById("passwordUnmatch").style.display = "block";
  }

  hideQuestionOnePlace() {
    document.getElementById("questionOnePlace").style.color = "transparent";
  }

  hideAnswerOnePlace() {
    document.getElementById("answerOnePlace").style.color = "transparent";
  }

  hideQuestionTwoPlace() {
    document.getElementById("questionTwoPlace").style.color = "transparent";
  }

  hideAnswerTwoPlace() {
    document.getElementById("answerTwoPlace").style.color = "transparent";
  }

  showPassword() {
    const password = document.getElementById("password");
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

  showConfirmPassword() {
    const password = document.getElementById("confirmPassword");
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

  showAnswerOne() {
    const password = document.getElementById("answerOne");
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

  showAnswerTwo() {
    const password = document.getElementById("answerTwo");
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

  onRegistroCompleto() {
    Swal.fire({
      width: 600,
      padding: "2em",
      backdrop: `
      rgba(0,46,113,0.8)
      `,
      icon: "success",
      html:
        "<p style='color: #002e71; margin: 5px 0; font-size: 16px; font-weight: 600; line-height: 24px'>¡Bienvenido Juan Pérez!</p>" +
        "<p style='color: #33486c; margin: 5px 0; text-align: justify;'>Tu información se ha guardaddo satisfactoriamente.</p>" +
        "<p style='color: #33486c; margin: 5px 0; text-align: justify;'>De ahora en adelante deberás acceder a tu sesión ingresando tu usuario y contraseña.</p>",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ff6b0b",
      buttonsStyling: false,
      customClass: {
        confirmButton: "registro__confirm",
      },
    }).then((result) => {
      Swal.close();
      this.registroCompleto.emit(true);
    });
  }

  get password() {
    return this.securityForm.get("password");
  }

  get confirm() {
    return this.securityForm.get("confirmPassword");
  }
}
