import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StaffVisualizerComponent} from './staff-visualizer.component';
import {TableModule} from 'primeng/table';
import {MockModule} from 'ng-mocks';

describe('StaffVisualizerComponent', () => {
  let component: StaffVisualizerComponent;
  let fixture: ComponentFixture<StaffVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffVisualizerComponent ],
      imports: [
          MockModule(TableModule)
      ]
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
