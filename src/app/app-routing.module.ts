import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./portal/pages/login/login.component";
import { NotfoundComponent } from "./portal/pages/notfound/notfound.component";
import { DatosComponent } from "./portal/pages/registro/datos/datos.component";
import { RegistroComponent } from "./portal/pages/registro/registro.component";
import { GeneralComponent } from "./portal/pages/home/general/general.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegistroComponent,
  },
  {
    path: "register/data",
    component: DatosComponent,
  },
  {
    path: "home/general",
    component: GeneralComponent,
  },
  {
    path: "404",
    component: NotfoundComponent,
  },
  {
    path: "**",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
