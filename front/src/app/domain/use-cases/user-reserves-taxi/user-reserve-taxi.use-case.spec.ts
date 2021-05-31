import UserReserveTaxiUseCase from './user-reserve-taxi.use-case';
import AccountBook from '../../ports/account-book';
import Taxi from '../../model/taxi/taxi';
import Client from '../../model/client/client';

describe('UserReserveTaxiUseCase', () => {

    let useCase: UserReserveTaxiUseCase;

    let accountBook: AccountBook;
    let client: Client;
    let taxi: Taxi;

    beforeEach(() => {
        accountBook = {
            registerClientBill: jest.fn(),
            registerDrive: jest.fn,
            registerClientReservation: jest.fn()
        }
        useCase = new UserReserveTaxiUseCase(accountBook);
        client = {
            name: 'jose',
            surname: 'Garcia'
        };
        taxi = {
            id: '123-432'
        };
        useCase.userReserveATaxi(client, taxi);
    });

    describe('when a client call for taxi reservation', () => {
        it('should register the reservation in the account book', () => {
            expect(accountBook.registerClientReservation).toHaveBeenCalledWith(client, taxi);
        });

        test('a taxi should be provided to user after its reservation', () => {
            expect(client.reservedTaxi!.id).toEqual(taxi.id);
        });
    });
});
