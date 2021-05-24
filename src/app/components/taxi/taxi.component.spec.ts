import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiComponent } from './taxi.component';

describe('TaxiComponent', () => {
  let component: TaxiComponent;
  let fixture: ComponentFixture<TaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
