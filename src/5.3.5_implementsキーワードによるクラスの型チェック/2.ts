export type HasName = {
  name: string;
};
// error TS2420: Class 'User' incorrectly implements interface 'HasName'.
//vProperty 'name' is missing in type 'User' but required in type 'HasName'.
// export class User implements HasName {
//   // name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     // this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
