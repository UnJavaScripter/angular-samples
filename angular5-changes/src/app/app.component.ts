import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeesCO from '@angular/common/locales/es-CO';

registerLocaleData(localeesCO);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enviar(formulario) {
    console.log(formulario);
  }
}
