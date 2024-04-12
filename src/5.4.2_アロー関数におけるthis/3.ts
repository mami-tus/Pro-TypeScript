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

  // 以下はコンパイルエラーにはならないが、ランタイムエラーになる
  // users.filter は this が uhyo になることを知らないため
  public filterOlder(users: readonly User[]): User[] {
    return users.filter(function (this: User, u) {
      u.#age > this.#age;
    });
  }
}

export const uhyo = new User('uhyo', 25);
export const john = new User('John Smith', 15);
export const bob = new User('Bob', 40);

export const older = uhyo.filterOlder([john, bob]);
// [ User { name: 'Bob' } ] と表示される
console.log(older);
