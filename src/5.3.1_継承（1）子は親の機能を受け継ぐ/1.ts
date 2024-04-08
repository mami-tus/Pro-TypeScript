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
}

export class PremiulUser extends User {
  rank: number = 1;
}

export const uhyo = new PremiulUser('uhyo', 26);
console.log(uhyo.rank); // 1 と表示される
console.log(uhyo.name); // uhyo と表示される
console.log(uhyo.isAdult()); // true と表示される
