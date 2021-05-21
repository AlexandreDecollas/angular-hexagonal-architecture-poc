import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import {StaffVisualizerComponent} from './staff-list/staff-visualizer/staff-visualizer.component';


const routes: Route[] = [
    {path: '', component: StaffVisualizerComponent}
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        AppRoutingModule,
        TableModule,
        ButtonModule,
        SharedModule,
        InputTextModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
