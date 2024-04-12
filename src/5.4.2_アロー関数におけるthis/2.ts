export class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public filterOlder(users: readonly User[]): User[] {
    return users.filter(function (u) {
      //  error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.
      // u.#age > this.#age;
    });
  }
}
