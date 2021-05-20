import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import Driver from '../../domain/model/driver';

@Component({
  selector: 'app-staff-visualizer',
  templateUrl: './staff-visualizer.component.html',
  styleUrls: ['./staff-visualizer.component.css']
})
export class StaffVisualizerComponent implements OnInit {

  public staff$: Observable<Driver[]> = of([]);

  constructor() { }

  public ngOnInit(): void {
    this.staff$ =  this.appService.getDrivers();
  }

}
