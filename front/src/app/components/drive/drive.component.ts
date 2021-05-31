import {Component, EventEmitter, Input, Output} from '@angular/core';
import Client from '../../domain/model/client/client';
import Taxi from '../../domain/model/taxi/taxi';

@Component({
    selector: 'app-drive',
    templateUrl: './drive.component.html',
    styleUrls: ['./drive.component.css']
})
export class DriveComponent {

    @Input() public client!: Client;
    @Output() public reservedATaxi: EventEmitter<void> = new EventEmitter<void>();

    public taxiReserved = false;
    public taxi!: Taxi;

    public reserveTaxi(): void {
    }

    public enteredTaxi(client: Client) {
    }

    public startedDrive(taxi: Taxi) {
    }
}
