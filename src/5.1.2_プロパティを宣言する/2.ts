export class User {
  name?: string;
  age: number = 0;
}

export const uhyo = new User();
console.log(uhyo.name); // undefined が表示される
uhyo.name = 'うひょ';
console.log(uhyo.name); // うひょ が表示される
