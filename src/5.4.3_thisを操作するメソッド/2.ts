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

export const uhyo = new User('uhyo', 25);
export const john = new User('John Smith', 15);

// thisがuhyoに固定されたisAdult
export const boundIsAdult = uhyo.isAdult.bind(uhyo);

console.log(boundIsAdult()); // true
console.log(boundIsAdult.call(john)); // true
