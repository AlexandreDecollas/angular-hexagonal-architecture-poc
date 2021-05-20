import Driver from './driver';

export default class Staff {

  private drivers: Driver[] = [];

  public getDrivers(): Driver[] {
    return this.drivers;
  }
}
