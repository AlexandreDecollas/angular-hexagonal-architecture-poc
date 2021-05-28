import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveComponent } from './drive.component';
import {ClientModule} from '../client/client.module';
import {TaxiModule} from '../taxi/taxi.module';



@NgModule({
    declarations: [
        DriveComponent
    ],
    exports: [
        DriveComponent
    ],
    imports: [
        CommonModule,
        ClientModule,
        TaxiModule
    ]
})
export class DriveModule { }
