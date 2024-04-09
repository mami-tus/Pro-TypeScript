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
  // rank: number;

  constructor(name: string, age: number, rank: number) {
    // error TS17009: 'super' must be called before accessing 'this' in the constructor of a derived class.
    // this.rank = rank;
    super(name, age);
  }
}
