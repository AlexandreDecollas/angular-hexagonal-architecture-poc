import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffVisualizerComponent } from './staff-visualizer/staff-visualizer.component';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    StaffVisualizerComponent
  ],
  exports: [
    StaffVisualizerComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class StaffListModule { }
