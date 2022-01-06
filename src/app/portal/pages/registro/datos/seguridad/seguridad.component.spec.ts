import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { SeguridadComponent } from "./seguridad.component";

describe("SeguridadComponent", () => {
  let component: SeguridadComponent;
  let fixture: ComponentFixture<SeguridadComponent>;
  let securityBtn;
  let password;
  let confirmPassword;
  let questionOne;
  let answerOne;
  let questionTwo;
  let answerTwo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SeguridadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    securityBtn = fixture.debugElement.query(
      By.css(".security__button")
    ).nativeElement;
    password = fixture.nativeElement.querySelector("#password");
    confirmPassword = fixture.nativeElement.querySelector("#confirmPassword");
    questionOne = fixture.nativeElement.querySelector("#questionOne");
    answerOne = fixture.nativeElement.querySelector("#answerOne");
    questionTwo = fixture.nativeElement.querySelector("#questionTwo");
    answerTwo = fixture.nativeElement.querySelector("#answerTwo");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should button be disabled", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugger;
      fixture.detectChanges();
      expect(securityBtn.disabled).toBe(true);
    });
  });
});
