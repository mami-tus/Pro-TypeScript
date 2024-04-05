export class User {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    // これはOK
    this.age = age;
  }

  setAge(newAge: number) {
    // error TS2540: Cannot assign to 'age' because it is a read-only property.
    // this.age = newAge;
  }
}

export const uhyo = new User('uhyo', 26);
// error TS2540: Cannot assign to 'age' because it is a read-only property.
// uhyo.age = 27;
