import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

/* Analytics */
import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'soy-cliente';

  ngAfterViewInit() {
    firebase.default.analytics();
  }
  
}
