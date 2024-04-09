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

export class PremiumUser extends User {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }
}

export const uhyo = new PremiumUser('uhyo', 26, 3);
console.log(uhyo.name); // uhyo と表示される
console.log(uhyo.rank); // 3 と表示される
