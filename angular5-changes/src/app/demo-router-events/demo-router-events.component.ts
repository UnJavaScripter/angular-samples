import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-router-events',
  templateUrl: './demo-router-events.component.html',
  styleUrls: ['./demo-router-events.component.css']
})
export class DemoRouterEventsComponent implements OnInit {

  constructor(private router: Router) {
    router.events.forEach((event) => {
      console.log(event);
    });
  }

  ngOnInit() {
  }

}
