export class User {
  name: string = '';
  age: number = 0;
}

export type MyUserConstructor = new () => User;

// newシグネチャで書き換え
// export type MyUserConstructor = {
//   new (): User;
// };

// UserはMyUserConstructor型を持つ
export const MyUser: MyUserConstructor = User;
// MyUserはnewで使用可能
export const u = new MyUser();
// uはUser型を持つ
console.log(u.name, u.age);
