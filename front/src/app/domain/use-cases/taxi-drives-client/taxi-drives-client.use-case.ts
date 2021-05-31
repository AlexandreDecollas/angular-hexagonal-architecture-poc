import Taxi from '../../model/taxi/taxi';
import Client from '../../model/client/client';

export default class TaxiDrivesClientUseCase {

    public clientEntersTheTaxi(taxi: Taxi, client: Client): void {
        taxi.clientIsEntered = true;
    }

    public taxiDrivesClient(taxi: Taxi): {error?: string} | void {
        if (!taxi.clientIsEntered)
            throw new Error(',p,p,');
    }
}
