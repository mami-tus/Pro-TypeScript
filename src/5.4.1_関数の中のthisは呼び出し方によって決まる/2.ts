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

export const isAdult = uhyo.isAdult;
// thisがundefinedになりランタイムエラー
console.log(isAdult());
