import { ServiceService } from './service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css']
})
export class DemoHttpComponent implements OnInit {

  constructor(private dataService: ServiceService) { }

  ngOnInit() {
    this.dataService.traerDatos().subscribe(e => {
      console.log(e);
    });
  }

}
