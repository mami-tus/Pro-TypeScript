// error TS2449: Class 'User' used before its declaration.
// export const uhyo_error = new User();

class User {
  name: string = '';
  age: number = 0;
}

export const uhyo = new User();
console.log(uhyo.name); // '' が表示される
console.log(uhyo.age); // 0 が表示される

uhyo.age = 26;
console.log(uhyo.age); // 26 が表示される
