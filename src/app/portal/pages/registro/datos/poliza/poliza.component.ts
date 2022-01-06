import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.scss'],
})
export class PolizaComponent implements OnInit {
  @Output() polizaSeleccionada = new EventEmitter();

  polizaCorrecta = false;
  showModal = false;
  closeModal = false;

  numPoliza = '77';

  firstDate = '1930-01-01';
  actualDate: string;
  today = new Date();
  dd = this.today.getDate().toString();
  mm = (this.today.getMonth() + 1).toString();
  yyyy = this.today.getFullYear().toString();

  polizaForm: FormGroup = this.formBuilder.group({
    numeroPoliza: ['', [Validators.required]],
    fechaVencimiento: ['', [Validators.required]],
    certificado: ['', [Validators.required]],
  });

  ngOnInit() {
    if (parseInt(this.dd) < 10) {
      this.dd = "0" + this.dd;
    }
    if (parseInt(this.mm) < 10) {
      this.mm = "0" + this.mm;
    }
    this.actualDate = this.yyyy + "-" + this.mm + "-" + this.dd;
  }

  ngDoCheck(): void {
    this.showModal = false;
    if (this.polizaForm.value.certificado.length > 0) {
      if (
        this.polizaForm.value.numeroPoliza !== "" &&
        this.polizaForm.value.fechaVencimiento !== ""
      ) {
        if (this.polizaForm.value.numeroPoliza === this.numPoliza) {
          this.showModal = true;
          this.polizaCorrecta = true;
        } else {
          this.showModal = true;
          this.polizaCorrecta = false;
        }
      }
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  soloNumeros(event: any) {
    const pressedKey = event.keyCode || event.which || event.charCode;
    if (
      (pressedKey <= 36 || pressedKey >= 40) &&
      !/^[0-9\b]+$/.test(event.key) &&
      pressedKey !== 8
    )
      event.preventDefault();
  }

  mostrarReferencia() {
    document.getElementById("numeroReferencia").style.color = "#acb4c0";
    document.getElementById("referenciaTooltip").style.display = "block";
  }
  mostrarNacimiento() {
    document.getElementById("fechaNacimiento").style.color = "#acb4c0";
  }

  mostrarCertificado() {
    document.getElementById("numeroCertificado").style.color = "#acb4c0";
  }

  ocultarReferencia() {
    document.getElementById("numeroReferencia").style.color = "transparent";
    document.getElementById("referenciaTooltip").style.display = "none";
  }

  ocultarNacimiento() {
    document.getElementById("fechaNacimiento").style.color = "transparent";
  }

  ocultarCertificado() {
    document.getElementById("numeroCertificado").style.color = "transparent";
  }

  onPolizaSeleccionada() {
    this.polizaSeleccionada.emit(true);
  }
}
