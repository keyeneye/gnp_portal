import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { DatosComponent } from "./datos.component";

describe("DatosComponent", () => {
  let component: DatosComponent;
  let fixture: ComponentFixture<DatosComponent>;
  let returnBtn;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [DatosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    returnBtn = fixture.nativeElement.querySelector("#return-registro");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be at poliza", () => {
    expect(component.polizaComp).toBeTrue();
  });

  it("should return to registro", async () => {
    fixture.detectChanges();
    spyOn(window, "open");
    returnBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(window.open).toHaveBeenCalled();
    });
  });
});
