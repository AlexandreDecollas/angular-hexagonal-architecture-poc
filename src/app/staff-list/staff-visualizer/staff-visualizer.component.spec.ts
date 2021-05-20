import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffVisualizerComponent } from './staff-visualizer.component';

describe('StaffVisualizerComponent', () => {
  let component: StaffVisualizerComponent;
  let fixture: ComponentFixture<StaffVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
