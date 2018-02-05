import { DemoRxjsComponent } from './demo-rxjs/demo-rxjs.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { DemoRouterEventsComponent } from './demo-router-events/demo-router-events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FormsDemoComponent
  },
  {
    path: 'router-events',
    component: DemoRouterEventsComponent
  },
  {
    path: 'pipes',
    component: DemoPipesComponent
  },
  {
    path: 'http',
    component: DemoHttpComponent
  },
  {
    path: 'rxjs',
    component: DemoRxjsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
