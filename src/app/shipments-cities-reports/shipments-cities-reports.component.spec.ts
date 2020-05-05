import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsCitiesReportsComponent } from './shipments-cities-reports.component';

describe('ShipmentsCitiesReportsComponent', () => {
  let component: ShipmentsCitiesReportsComponent;
  let fixture: ComponentFixture<ShipmentsCitiesReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsCitiesReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsCitiesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
