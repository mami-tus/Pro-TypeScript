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
    return users.filter(function (this: User, u) {
      u.#age > this.#age;
    });
  }
}
