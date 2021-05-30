import UserReserveTaxiUseCase from './user-reserve-taxi.use-case';
import Client from '../model/client/client';
import Taxi from '../model/taxi/taxi';

describe('UserReserveTaxiUseCase', () => {

    let useCase: UserReserveTaxiUseCase;

    beforeEach(() => {
        useCase = new UserReserveTaxiUseCase();


    });

    it('should register when a user reserve a taxi', () => {
        const client: Client = {

        };
        const taxi: Taxi = {

        };
        useCase.userReserveATaxi(client, taxi);
    });
});
