import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { RegistroComponent } from "./registro.component";

describe("RegistroComponent", () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let registroBtn;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [RegistroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    registroBtn = fixture.debugElement.query(
      By.css(".registro__button")
    ).nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain two checkboxes", () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const app = fixture.componentInstance;
    expect(app.privacidad).toBeDefined();
    expect(app.terminos).toBeDefined();
  });

  it("should checkboxes be disabled", () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const app = fixture.componentInstance;
    expect(app.privacidad.value && app.terminos.value).toBeFalse();
  });

  it("should button be disabled", async () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugger;
      fixture.detectChanges();
      expect(registroBtn.disabled).toBe(true);
    });
  });
});
