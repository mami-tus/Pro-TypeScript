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

  //  error TS2416: Property 'isAdult' in type 'PremiumUser' is not assignable to the same property in base type 'User'.
  // public isAdult(): string {
  //   return '大人です';
  // }
}
