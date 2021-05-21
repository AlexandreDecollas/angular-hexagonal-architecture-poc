import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public firstname = '';
    public lastname = '';

    constructor() {
    }


    public addNewDriver(firstname: string, lastname: string) {

    }
}
