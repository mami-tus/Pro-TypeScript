export const User = class {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
};

export const uhyo = new User('uhyo', 26);
console.log(uhyo.name); // 'uhyo' が表示される
console.log(uhyo.isAdult()); // true が表示される
// error TS18013: Property '#age' is not accessible outside class '(anonymous)' because it has a private identifier.
// console.log(uhyo.#age);
