// export class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// 上記のコードは以下の構文で簡略化できる
export class User {
  constructor(public name: string, private age: number) {}
}
