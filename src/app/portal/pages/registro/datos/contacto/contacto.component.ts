import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegisterService } from '../../../../../data/providers/register/register.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  @Output() contactoSeleccionado = new EventEmitter();

  validEmail: boolean;
  validPhone: boolean;

  contactoForm: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)],],
    metodo_correo: [false, []],
    metodo_mensaje: [false, []],
  });

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  mostrarCorreo() {
    document.getElementById("correo").style.color = "#acb4c0";
    document.getElementById("emailTooltip").style.display = "block";
  }
  mostrarCelular() {
    document.getElementById("celular").style.color = "#acb4c0";
    if (this.contactoForm.value.celular.length < 10) {
      document.getElementById("phoneTooltip").style.display = "block";
      document.getElementById("phoneTooltipError").style.display = "none";
    } else if (
      this.contactoForm.value.celular.length < 1 &&
      this.validPhone === false
    ) {
      document.getElementById("phoneTooltip").style.display = "none";
      document.getElementById("phoneTooltipError").style.display = "block";
    } else if (this.validPhone === true) {
      document.getElementById("phoneTooltip").style.display = "block";
      document.getElementById("phoneTooltipError").style.display = "none";
    }
  }

  soloNumeros(event: any) {
    const pressedKey = event.keyCode || event.which || event.charCode;
    if (
      (pressedKey <= 36 || pressedKey >= 40) &&
      !/^[0-9\b]+$/.test(event.key) &&
      pressedKey !== 8
    )
      event.preventDefault();
  }
  ocultarCorreo() {
    document.getElementById("correo").style.color = "transparent";
    document.getElementById("emailTooltip").style.display = "none";
  }

  ocultarCelular() {
    document.getElementById("celular").style.color = "transparent";
    document.getElementById("phoneTooltip").style.display = "none";
    document.getElementById("phoneTooltipError").style.display = "none";
  }

  async onContactoSeleccionado() {
    if (
      this.contactoForm.value.metodo_correo &&
      this.contactoForm.value.metodo_mensaje
    ) {
      await Swal.fire({
        width: 400,
        html:
          "<p style='color: #002e71; margin: 5px 0; margin-top: 25px; font-size: 16px; font-weight: 600; line-height: 24px'>Código de verificación</p>" +
          "<p style='color: #33486c; margin: 5px 0; margin-top: 16px; text-align: justify;'>Ingresa el código de verificación que enviamos a tu correo electrónico y por SMS a tu número celular.</p>" +
          "<div class='contacto__placeholder'>" +
          "<label class='contacto__placeholder_text'>Código de verificación</label>" +
          "<input class='contacto__numero' id='codigoEnvio' type='text' placeholder='Código de verificación' formControlName='correo'>" +
          "</div>" +
          "<div style='display: grid; grid-template-columns: 50px 1fr; align-items: center; background-color: #FBF5C6; box-shadow: 0px 2px 4px 0px #00000024;'>" +
          "<img style='justify-self: center;' src='./assets/icons/icon-warning.png' alt='warning'>" +
          "<div>" +
          "<p style='color: #B18931; font-size: 10px; font-weight: 600; line-height: 16px; letter-spacing: 1.5px; text-align: left;'>CODIGO DE VERIFICACIÓN</p>" +
          "<p style='color: #33486C; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px; text-align: left;'>Válido por 3:00 minutos</p>" +
          "</div>" +
          "</div>" +
          "<p style='text-align: left; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px;'>¿Tienes problemas? <span style='color: #FF6B0B; cursor: pointer;'>Reenviar código</span></p>" +
          "<div style='display: grid; grid-template-columns: 100px 1fr; grid-gap: 20px; align-items: center;'>" +
          "<button id='modalButton' type='button' class='modal__button'> Validar </button>" +
          "<p style='text-align: left; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px;'><span style='color: #FF6B0B; cursor: pointer;'>No es mi número actual</span></p>" +
          "</div>",
        focusCancel: false,
        didOpen: () => {
          document
            .getElementById("modalButton")
            .setAttribute("disabled", "disabled");
        },
        didRender: () => {
          document
            .getElementById("codigoEnvio")
            .addEventListener("change", (event) => {
              const button = document.getElementById("modalButton");
              button.removeAttribute("disabled");
            });
          document
            .getElementById("modalButton")
            .addEventListener("click", (event) => {
              Swal.close();
              this.contactoSeleccionado.emit(true);
            });
        },
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
    if (
      this.contactoForm.value.metodo_correo &&
      !this.contactoForm.value.metodo_mensaje
    ) {
      await Swal.fire({
        width: 400,
        html:
          "<p style='color: #002e71; margin: 5px 0; margin-top: 25px; font-size: 16px; font-weight: 600; line-height: 24px'>Código de verificación</p>" +
          "<p style='color: #33486c; margin: 5px 0; margin-top: 16px; text-align: justify;'>Hemos enviado un código a (revisa tu correo no deseado):</p>" +
          "<p style='color: #FF6B0B; margin: 5px 0; margin-top: 16px; text-align: justify;'>" +
          `${this.contactoForm.value.correo}` +
          "</p>" +
          "<div class='contacto__placeholder'>" +
          "<input class='contacto__numero' id='codigoEnvio' type='text' placeholder='Código de verificación' formControlName='correo'>" +
          "</div>" +
          "<div style='display: grid; grid-template-columns: 50px 1fr; align-items: center; background-color: #FBF5C6; box-shadow: 0px 2px 4px 0px #00000024;'>" +
          "<img style='justify-self: center;' src='./assets/icons/icon-warning.png' alt='warning'>" +
          "<div>" +
          "<p style='color: #B18931; font-size: 10px; font-weight: 600; line-height: 16px; letter-spacing: 1.5px; text-align: left;'>CODIGO DE VERIFICACIÓN</p>" +
          "<p style='color: #33486C; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px; text-align: left;'>Válido por 72 horas</p>" +
          "</div>" +
          "</div>" +
          "<p style='text-align: left; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px;'>¿Tienes problemas? <span style='color: #FF6B0B; cursor: pointer;'>Reenviar código</span></p>" +
          "<div style='display: grid; grid-template-columns: 100px 1fr; grid-gap: 20px; align-items: center;'>" +
          "<button id='modalButton' type='button' class='modal__button'> Validar </button>" +
          "</div>",
        focusCancel: false,
        didOpen: () => {
          document
            .getElementById("modalButton")
            .setAttribute("disabled", "disabled");
        },
        didRender: () => {
          document
            .getElementById("codigoEnvio")
            .addEventListener("change", (event) => {
              const button = document.getElementById("modalButton");
              button.removeAttribute("disabled");
            });
          document
            .getElementById("modalButton")
            .addEventListener("click", (event) => {
              Swal.close();
              this.contactoSeleccionado.emit(true);
            });
        },
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
    if (
      this.contactoForm.value.metodo_mensaje &&
      !this.contactoForm.value.metodo_correo
    ) {
      await Swal.fire({
        width: 400,
        html:
          "<p style='color: #002e71; margin: 5px 0; margin-top: 25px; font-size: 16px; font-weight: 600; line-height: 24px'>Código de verificación</p>" +
          "<p style='color: #33486c; margin: 5px 0; margin-top: 16px; text-align: justify;'>Ingresa el código de verificación que te enviamos por SMS al número: </p>" +
          "<p style='color: #FF6B0B; margin: 5px 0; margin-top: 16px; text-align: justify;'> (+52)" +
          `${this.contactoForm.value.celular}` +
          "</p>" +
          "<div class='contacto__placeholder'>" +
          "<input class='contacto__numero' id='codigoEnvio' type='text' placeholder='Código de verificación' formControlName='correo'>" +
          "</div>" +
          "<div style='display: grid; grid-template-columns: 50px 1fr; align-items: center; background-color: #FBF5C6; box-shadow: 0px 2px 4px 0px #00000024;'>" +
          "<img style='justify-self: center;' src='./assets/icons/icon-warning.png' alt='warning'>" +
          "<div>" +
          "<p style='color: #B18931; font-size: 10px; font-weight: 600; line-height: 16px; letter-spacing: 1.5px; text-align: left;'>CODIGO DE VERIFICACIÓN</p>" +
          "<p style='color: #33486C; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px; text-align: left;'>Válido por 3:00 minutos</p>" +
          "</div>" +
          "</div>" +
          "<p style='text-align: left; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.5px;'>¿Tienes problemas? <span style='color: #FF6B0B; cursor: pointer;'>Reenviar código</span></p>" +
          "<div style='display: grid; grid-template-columns: 100px 1fr; grid-gap: 20px; align-items: center;'>" +
          "<button id='modalButton' type='button' class='modal__button'> Validar </button>" +
          "</div>",
        focusCancel: false,
        didOpen: () => {
          document
            .getElementById("modalButton")
            .setAttribute("disabled", "disabled");
        },
        didRender: () => {
          document
            .getElementById("codigoEnvio")
            .addEventListener("change", (event) => {
              const button = document.getElementById("modalButton");
              button.removeAttribute("disabled");
            });
          document
            .getElementById("modalButton")
            .addEventListener("click", (event) => {
              Swal.close();
              this.contactoSeleccionado.emit(true);
            });
        },
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
  }

  validarCorreo() {
    if (this.contactoForm.value.correo.length > 0 && this.email.valid) {
      this.registerService
        .getValidateEmail(this.contactoForm.value.correo)
        .subscribe((response) => {
          this.validEmail = response;
        });
    }
  }

  validarTelefono() {
    if (this.contactoForm.value.celular.length > 0 && this.phone.valid) {
      this.registerService
        .getValidatePhoneNumber(this.contactoForm.value.celular)
        .subscribe((response) => {
          console.log(response);
          this.validPhone = response.validacionMedioContacto;
        });
    }
  }

  get email() {
    return this.contactoForm.get("correo");
  }
  get phone() {
    return this.contactoForm.get("celular");
  }
}
