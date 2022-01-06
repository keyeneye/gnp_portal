import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-datos",
  templateUrl: "./datos.component.html",
  styleUrls: ["./datos.component.scss"],
})
export class DatosComponent implements OnInit {
  polizaComp: boolean = true;
  contactoComp: boolean = false;
  seguridadComp: boolean = false;

  showResponsive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.polizaComp) {
      document.getElementById("polizaSpan").style.color = "#ff6b0b";
      document.getElementById("polizaSpan").style.borderTopColor = "#ff6b0b";

      document.getElementById("contactoSpan").style.color = "#acb4c0";
      document.getElementById("contactoSpan").style.borderTopColor = "#acb4c0";

      document.getElementById("responsivePoliza").style.color = "#ff6b0b";
      document.getElementById("responsivePoliza").style.fontWeight = "600";

      document.getElementById("responsiveFirst").style.color = "#ff6b0b";
      document.getElementById("responsiveFirst").style.backgroundColor =
        "#FFFFFF";

      document.getElementById("responsiveContacto").style.color = "#567099";
      document.getElementById("responsiveContacto").style.fontWeight = "400";

      document.getElementById("responsiveSecond").style.color = "#567099";
      document.getElementById("responsiveSecond").style.backgroundColor =
        "#acb4c0";
      document.getElementById("firstStep").style.backgroundColor = "#acb4c0";
      document.getElementById("secondStep").style.backgroundColor = "#acb4c0";
    }
    if (this.contactoComp) {
      document.getElementById("polizaSpan").style.color = "#33486C";
      document.getElementById("polizaSpan").style.borderTopColor = "#33486C";

      document.getElementById("contactoSpan").style.color = "#ff6b0b";
      document.getElementById("contactoSpan").style.borderTopColor = "#ff6b0b";

      document.getElementById("seguridadSpan").style.color = "#acb4c0";
      document.getElementById("seguridadSpan").style.borderTopColor = "#acb4c0";

      document.getElementById("responsiveSeguridad").style.color = "#567099";
      document.getElementById("responsiveSeguridad").style.fontWeight = "400";

      document.getElementById("responsiveThird").style.color = "#567099";
      document.getElementById("responsiveThird").style.backgroundColor =
        "#acb4c0";

      document.getElementById("firstStep").style.backgroundColor = "#ff6b0b";
      document.getElementById("secondStep").style.backgroundColor = "#acb4c0";
    }
    if (this.seguridadComp) {
      document.getElementById("secondStep").style.backgroundColor = "#ff6b0b";
    }
  }

  setPolizaSeleccionada(poliza) {
    this.polizaComp = false;
    this.contactoComp = true;
    this.seguridadComp = false;

    document.getElementById("polizaSpan").style.color = "#33486C";
    document.getElementById("polizaSpan").style.borderTopColor = "#33486C";

    document.getElementById("contactoSpan").style.color = "#ff6b0b";
    document.getElementById("contactoSpan").style.borderTopColor = "#ff6b0b";

    document.getElementById("responsiveContacto").style.color = "#ff6b0b";
    document.getElementById("responsiveContacto").style.fontWeight = "600";

    document.getElementById("responsiveSecond").style.color = "#ff6b0b";
    document.getElementById("responsiveSecond").style.backgroundColor =
      "#FFFFFF";
  }
  setContactoSeleccionado(contacto) {
    this.polizaComp = false;
    this.contactoComp = false;
    this.seguridadComp = true;

    document.getElementById("polizaSpan").style.color = "#33486C";
    document.getElementById("polizaSpan").style.borderTopColor = "#33486C";

    document.getElementById("contactoSpan").style.color = "#33486C";
    document.getElementById("contactoSpan").style.borderTopColor = "#33486C";

    document.getElementById("seguridadSpan").style.color = "#ff6b0b";
    document.getElementById("seguridadSpan").style.borderTopColor = "#ff6b0b";

    document.getElementById("responsiveSeguridad").style.color = "#ff6b0b";
    document.getElementById("responsiveSeguridad").style.fontWeight = "600";

    document.getElementById("responsiveThird").style.color = "#ff6b0b";
    document.getElementById("responsiveThird").style.backgroundColor =
      "#FFFFFF";
  }

  setRegistroCompleto(registro) {
    this.router.navigateByUrl("/login");
  }

  returnPage() {
    if (this.contactoComp) {
      this.polizaComp = true;
      this.contactoComp = false;
      this.seguridadComp = false;
    }
    if (this.seguridadComp) {
      this.polizaComp = false;
      this.contactoComp = true;
      this.seguridadComp = false;
    }
  }

  showResponsiveDetail() {
    this.showResponsive = !this.showResponsive;
    if (this.showResponsive) {
      document.getElementById("responsiveModal").style.display = "block";
    } else {
      document.getElementById("responsiveModal").style.display = "none";
    }
  }
}
