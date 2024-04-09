export class User {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

export class PremiumUser extends User {
  public isAdult(): boolean {
    return this.age >= 10;
  }
}

export const miniUhyo = new PremiumUser('uhyo', 15);
export const john = new User('John Smith', 15);

console.log(miniUhyo.isAdult()); // true と表示される
console.log(john.isAdult()); // false と表示される
// error TS2445: Property 'age' is protected and only accessible within class 'User' and its subclasses.
// console.log(miniUhyo.age);
