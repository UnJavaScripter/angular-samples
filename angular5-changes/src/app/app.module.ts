import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { DemoRouterEventsComponent } from './demo-router-events/demo-router-events.component';
import { RoutingModule } from './routing.module';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';

import { HttpClientModule } from '@angular/common/http';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeesCO from '@angular/common/locales/es-CO';
import { ServiceService } from './demo-http/service.service';
import { DemoRxjsComponent } from './demo-rxjs/demo-rxjs.component';

registerLocaleData(localeesCO);

@NgModule({
  declarations: [
    AppComponent,
    DemoRouterEventsComponent,
    FormsDemoComponent,
    DemoPipesComponent,
    DemoHttpComponent,
    DemoRxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
