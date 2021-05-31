import Taxi from '../taxi/taxi';

export default interface Client {
    name: string;
    surname: string;
    reservedTaxi?: Taxi;
}
