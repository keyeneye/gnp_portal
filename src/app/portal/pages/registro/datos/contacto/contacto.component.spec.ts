import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { ContactoComponent } from "./contacto.component";

describe("ContactoComponent", () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;
  let contactoBtn;
  let email;
  let phone;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ContactoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contactoBtn = fixture.debugElement.query(
      By.css(".contacto__button")
    ).nativeElement;
    email = fixture.nativeElement.querySelector("#mailContact");
    phone = fixture.nativeElement.querySelector("#phoneContact");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should button be disabled", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugger;
      fixture.detectChanges();
      expect(contactoBtn.disabled).toBe(true);
    });
  });

  it("should change input text", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      email.value = "mail@gmail.com";
      phone.value = "5515243698";
      email.dispatchEvent(new Event("input"));
      phone.dispatchEvent(new Event("input"));
      fixture.detectChanges();
      expect(email.value).toBe("mail@gmail.com");
      expect(phone.value).toBe("5515243698");
    });
  });
});
