export class User {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

export const uhyo = new User('uhyo', 26);
console.log(uhyo.name); // 'uhyo' が表示される
console.log(uhyo.isAdult()); // true が表示される
// error TS2341: Property 'age' is private and only accessible within class 'User'.
// console.log(uhyo.age);
