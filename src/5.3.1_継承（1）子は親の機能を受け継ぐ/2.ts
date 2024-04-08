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
}

function getMessage(u: User) {
  return `こんにちは、${u.name}さん`;
}

export const john = new User('John Smith', 15);
export const uhyo = new PremiumUser('uhyo', 26);

console.log(getMessage(john)); // こんにちは、John Smithさん と表示される
// PremiumUser型はUser型の部分型なので代入できる
console.log(getMessage(uhyo)); // こんにちは、uhyoさん と表示される
