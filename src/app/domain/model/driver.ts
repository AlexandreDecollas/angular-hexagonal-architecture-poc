export default class Driver {
  private name = 'Doe';
  private surname = 'John';
  private id = '';

  constructor(name: string, surname: string, id: string) {
    this.name = name;
    this.surname = surname;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public getSurname(): string {
    return this.surname;
  }
}
