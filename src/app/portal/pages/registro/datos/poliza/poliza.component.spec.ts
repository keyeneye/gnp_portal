import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { PolizaComponent } from "./poliza.component";

describe("PolizaComponent", () => {
  let component: PolizaComponent;
  let fixture: ComponentFixture<PolizaComponent>;
  let polizaBtn;
  let numeroPoliza;
  let numeroCertificado;
  let expiredDate;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [PolizaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    polizaBtn = fixture.debugElement.query(
      By.css(".poliza__button")
    ).nativeElement;
    numeroPoliza = fixture.nativeElement.querySelector("#numeroPoliza");
    expiredDate = fixture.nativeElement.querySelector("#fechaVencimiento");
    numeroCertificado = fixture.nativeElement.querySelector("#certificado");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should button be disabled", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugger;
      fixture.detectChanges();
      expect(polizaBtn.disabled).toBe(true);
    });
  });

  it("should change input text", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      numeroPoliza.value = "77";
      expiredDate.value = "05/11/1995";
      numeroCertificado.value = "454545";
      numeroPoliza.dispatchEvent(new Event("input"));
      expiredDate.dispatchEvent(new Event("input"));
      numeroCertificado.dispatchEvent(new Event("input"));
      fixture.detectChanges();
      expect(numeroPoliza.value).toBe("77");
      expect(expiredDate.value).toBe("05/11/1995");
      expect(numeroCertificado.value).toBe("454545");
    });
  });
  it("should button be able", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      numeroPoliza.value = "77";
      expiredDate.value = "05/11/1995";
      numeroCertificado.value = "454545";
      numeroPoliza.dispatchEvent(new Event("input"));
      expiredDate.dispatchEvent(new Event("input"));
      numeroCertificado.dispatchEvent(new Event("input"));
      debugger;
      fixture.detectChanges();
      expect(polizaBtn.disabled).toBe(false);
    });
  });
});
