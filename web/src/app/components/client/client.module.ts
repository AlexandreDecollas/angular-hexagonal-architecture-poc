import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientComponent} from './client.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';


@NgModule({
    declarations: [
        ClientComponent
    ],
    exports: [
        ClientComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        RippleModule
    ]
})
export class ClientModule {
}
