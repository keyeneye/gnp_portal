/* Angular Components */
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Animations */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

/* Internet Components */
import { HttpClientModule } from "@angular/common/http";

/* Angular Material */
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";

/* Componentes */
import { LoginComponent } from "./portal/pages/login/login.component";
import { ButtonsComponent } from "./portal/viewUtils/buttons/buttons.component";
import { NotfoundComponent } from "./portal/pages/notfound/notfound.component";
import { RegistroComponent } from "./portal/pages/registro/registro.component";
import { DatosComponent } from "./portal/pages/registro/datos/datos.component";
import { PolizaComponent } from "./portal/pages/registro/datos/poliza/poliza.component";
import { ContactoComponent } from "./portal/pages/registro/datos/contacto/contacto.component";
import { SeguridadComponent } from "./portal/pages/registro/datos/seguridad/seguridad.component";
import { FooterComponent } from "./portal/pages/footer/footer.component";

/* Environment */
import { environment } from "../environments/environment";

/* Firebase */
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";
import { GeneralComponent } from "./portal/pages/home/general/general.component";

firebase.default.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonsComponent,
    NotfoundComponent,
    RegistroComponent,
    DatosComponent,
    PolizaComponent,
    ContactoComponent,
    SeguridadComponent,
    FooterComponent,
    GeneralComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
