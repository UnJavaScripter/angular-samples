import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-demo-rxjs',
  templateUrl: './demo-rxjs.component.html',
  styleUrls: ['./demo-rxjs.component.css']
})
export class DemoRxjsComponent implements OnInit {

  p: string[] = [
    'Thorin',
    'Dwalin',
    'Balin',
    'Gloin',
    'Kili',
    'Fili',
    'Dori',
    'Nori',
    'Ori',
    'Óin',
    'Bifur',
    'Bofur',
    'Bombur'
  ];

  datos = new Observable(observer => {
    setInterval(() => {
      const nombreAlAzar = this.p[Math.floor(Math.random() * this.p.length)];
      observer.next(nombreAlAzar)
    }, 1000);
  })
  constructor() { }

  ngOnInit() {
  }

}
