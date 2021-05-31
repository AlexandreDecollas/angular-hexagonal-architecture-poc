import {Injectable, InjectionToken} from '@angular/core';
import AccountBook from '../../domain/ports/account-book';
import Taxi from '../../domain/model/taxi/taxi';
import Client from '../../domain/model/client/client';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;

@Injectable()
export class AccountBookServiceRealTime implements AccountBook {

    private _socket: Socket = io('http://localhost:3000/');

    public registerClientBill(taxi: Taxi, client: Client): void {

        this._socket.on('events', function (data: any) {
            console.log('event', data);
        });
        this._socket.on('exception', (data: any) => {
            console.log('event', data);
        });
        this._socket.on('disconnect', function () {
            console.log('Disconnected');
        });
        this._socket.emit('events', {test: 'test'});
    }

    public registerDrive(taxi: Taxi): void {
        console.log('registerDrive');
    }

    public registerClientReservation(client: Client, taxi: Taxi): void {
    }
}
