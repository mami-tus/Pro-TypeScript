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

  public filterOlder(users: User[]): User[] {
    const _this = this;
    return users.filter(function (u) {
      u.#age > _this.#age;
    });
  }
}
