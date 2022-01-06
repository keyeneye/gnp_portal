import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import * as Images from './../../utils/ImagesRoutes';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"],
})
export class RegistroComponent implements OnInit {

  arrowBackIcon = Images.ARROW_BACK;

  registerForm: FormGroup = this.formBuilder.group({
    privacidad: [false, [Validators.required]],
    terminos: [false, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  mostrarTerminos() {
    Swal.fire({
      width: 600,
      padding: "2em",
      backdrop: `
      rgba(0,46,113,0.8)
      `,
      html:
        "<p style='color: #002e71; margin: 5px 0; font-size: 16px; font-weight: 600; line-height: 24px'>Términos y condiciones del uso de Medios Electrónicos</p>" +
        "<h4 style='color: #33486c; margin: 0; font-size: 20px; font-weight: 600; line-height: 40px; text-align: left;' >Contrato de uso de medios </h4>" +
        "<p style='color: #33486c; margin: 5px 0; text-align: justify;'>En cumplimiento a las disposiciones legales relacionadas con la Protección de Datos Personales en Posesión de los Particulares, Grupo Nacional Provincial, S.A.B., (GNP), con domicilio en Avenida Cerro de las Torres No. 395, Colonia Campestre Churubusco, Código Postal 04200, Alcaldía Coyoacán, Ciudad de México, hace de su conocimiento que sus datos personales (identificación, patrimoniales, financieros, laborales, académicos.</p>" +
        "<h4 style='color: #33486c; margin: 0; font-size: 20px; font-weight: 600; line-height: 40px; text-align: left;'>DECLARACIONES</h4>" +
        '<h4 style="color: #33486c; margin: 0; font-size: 20px; font-weight: 400; line-height: 40px; text-align: left;">"LAS PARTES DECLARAN":</h4>' +
        "<p style='color: #33486c; margin: 5px 0; text-align: justify;'>Clientes (proponentes o solicitantes, contratantes, asegurados, beneficiarios, proveedor de recursos, terceros afectados, fideicomitentes y fideicomisarios).</p>" +
        "<p style='color: #33486c; margin: 5px 0; text-align: justify;'>Se utilizarán para evaluar su solicitud de seguro, valuación de riesgos, prevención y detección de fraude y operaciones ilícitas, dar trámite a las reclamaciones de siniestros, venta de salvamentos y administrar, mantener o renovar el contrato de seguro en cumplimiento a nuestras obligaciones de la Ley sobre el Contrato de Seguro, Ley de Instituciones de Seguros y Fianzas y demás leyes y disposiciones que nos regulan, así como para estudios estadísticos y evaluar la calidad del servicio.</p>",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ff6b0b",
      buttonsStyling: false,
      customClass: {
        confirmButton: "registro__confirm",
      },
    });
  }

  get privacidad() {
    return this.registerForm.get("privacidad");
  }

  get terminos() {
    return this.registerForm.get("terminos");
  }
}
