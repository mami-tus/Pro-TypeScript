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

  // ここでisAdultを再宣言
  public isAdult(): boolean {
    return true;
  }
}

export const john = new User('John Smith', 15);
export const taro = new PremiumUser('Taro Yamada', 15);

console.log(john.isAdult()); // false と表示される
console.log(taro.isAdult()); // true と表示される
