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

export const uhyo = new User('uhyo', 26);
export const john = new User('John Smith', 15);

console.log(uhyo.isAdult === john.isAdult); // true が表示される
