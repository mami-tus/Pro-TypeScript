export class User {
  static adminName: string = 'uhyo';
  static getAdminUser() {
    return new User(User.adminName, 26);
  }

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}

console.log(User.adminName); // 'uhyo' が表示される
export const admin = User.getAdminUser();
console.log(admin.age); // 26 が表示される
console.log(admin.isAdult()); // true が表示される

export const uhyo = new User('uhyo', 26);
// error TS2576: Property 'adminName' does not exist on type 'User'. Did you mean to access the static member 'User.adminName' instead?
// console.log(uhyo.adminName);

// 静的プロパティやメソッドを使わずに同じ機能を実現
// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// // adminName をグローバル変数またはモジュールスコープの変数として定義
// const adminName: string = 'uhyo';

// function getAdminUser() {
//   return new User(adminName, 26);
// }

// // 使用例
// console.log(adminName); // 'uhyo' が表示される
// const admin = getAdminUser();
// console.log(admin.age); // 26 が表示される
// console.log(admin.isAdult()); // true が表示される

// const uhyo = new User('uhyo', 26);
// // uhyoインスタンスからadminNameに直接アクセスしようとするとエラーにはなりませんが、
// // adminNameはuhyoインスタンスのプロパティではなく、グローバル変数です。
