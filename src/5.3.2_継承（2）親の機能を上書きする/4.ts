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
  rank: number = 1;

  constructor(name: string, rank: number) {
    super(name, 100);
    this.rank = rank;
  }
}
