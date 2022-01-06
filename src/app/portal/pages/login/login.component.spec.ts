import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { by, element } from "protractor";
import { LoginService } from "src/app/data/providers/login/login.service";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [LoginService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    emailInput = fixture.nativeElement.querySelector("#email");
    passwordInput = fixture.nativeElement.querySelector("#login_password");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain two inputs", () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.email).toBeDefined();
    expect(app.password).toBeDefined();
  });

  it("should change input text", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      emailInput.value = "mail@gmail.com";
      passwordInput.value = "123456789";
      emailInput.dispatchEvent(new Event("input"));
      passwordInput.dispatchEvent(new Event("input"));
      fixture.detectChanges();
      expect(emailInput.innerText).toBe("");
      expect(passwordInput.innerText).toBe("");
    });
  });

  it("should navigate to register", () => {
    fixture.detectChanges();
    spyOn(window, "open");
    fixture.whenStable().then(() => {
      // expect(link).toHaveBeenCalled();
      expect(window.open).toHaveBeenCalledWith(
        "http://localhost:9876/register"
      );
    });
  });
});
