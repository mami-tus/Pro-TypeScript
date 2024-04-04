export class User {
  name: string = '';
  age: number = 0;
}

// Userクラスが入ったオブジェクト
export const obj = { cl: User };

// new obj.cl() でインスタンスを生成
const uhyo = new obj.cl();
console.log(uhyo.age); // 0 が表示される
