export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // error TS2565: Property 'age' is used before being assigned.
    // console.log(this.age);
    this.name = name;
    this.age = age;
    // これはthis.ageに代入済みなのでOK
    console.log(this.age);
  }
}
