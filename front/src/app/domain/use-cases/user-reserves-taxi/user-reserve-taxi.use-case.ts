import AccountBook from '../../ports/account-book';
import Taxi from '../../model/taxi/taxi';
import Client from '../../model/client/client';

export default class UserReserveTaxiUseCase {

    constructor(
        private readonly _accountBook: AccountBook
    ) {
    }

    public userReserveATaxi(client: Client, taxi: Taxi): void {
        this._accountBook.registerClientReservation(client, taxi);
        client.reservedTaxi = taxi;
    }

}
