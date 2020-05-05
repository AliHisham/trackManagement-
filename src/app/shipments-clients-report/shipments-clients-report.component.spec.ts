import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsClientsReportComponent } from './shipments-clients-report.component';

describe('ShipmentsClientsReportComponent', () => {
  let component: ShipmentsClientsReportComponent;
  let fixture: ComponentFixture<ShipmentsClientsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsClientsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsClientsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
