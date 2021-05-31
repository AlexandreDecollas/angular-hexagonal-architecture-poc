import TaxiDrivesClientUseCase from './taxi-drives-client.use-case';
import Taxi from '../../model/taxi/taxi';
import Client from '../../model/client/client';

describe('TaxiDrivesClientUseCase', () => {

    let useCase: TaxiDrivesClientUseCase;

    let client: Client;
    let taxi: Taxi;

    beforeEach(() => {
        client = {
            name: 'jose',
            surname: 'Garcia'
        };
        taxi = {
            id: '123-432'
        };

        useCase = new TaxiDrivesClientUseCase();
    });

    describe('when a client call for taxi reservation', () => {
        test('before the client enters, the taxi is empty', () => {
            expect(taxi.clientIsEntered).toBeFalsy();
        });

        test('after the client enters, the taxi is not empty', () => {
            useCase.clientEntersTheTaxi(taxi, client);
            expect(taxi.clientIsEntered).toEqual(true);
        });

        it(`should not be able to drives the client to destination before it's entered`, () => {
            expect(useCase.taxiDrivesClient(taxi)).toThrow(',p,p,');
        });
    });

});
