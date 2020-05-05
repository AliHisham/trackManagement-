import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRectComponent } from './data-rect.component';

describe('DataRectComponent', () => {
  let component: DataRectComponent;
  let fixture: ComponentFixture<DataRectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
