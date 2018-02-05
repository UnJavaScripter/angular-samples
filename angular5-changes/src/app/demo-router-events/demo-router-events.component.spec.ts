import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouterEventsComponent } from './demo-router-events.component';

describe('DemoRouterEventsComponent', () => {
  let component: DemoRouterEventsComponent;
  let fixture: ComponentFixture<DemoRouterEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouterEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
