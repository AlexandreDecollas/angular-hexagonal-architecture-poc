import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxiComponent } from './taxi.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';



@NgModule({
  exports: [
    TaxiComponent
  ],
  declarations: [
    TaxiComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule
  ]
})
export class TaxiModule { }
