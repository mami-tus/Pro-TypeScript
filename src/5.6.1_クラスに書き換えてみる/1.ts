// export type User = {
//   name: string;
//   age: number;
// };

// export function createUser(name: string, age: number): User {
//   if (name === '') {
//     throw new Error('名前は空にできません！');
//   }
//   return { name, age };
// }

// export function getMessage(user: User, message: string): string {
//   return `${user.name} (${user.age})「${message}」`;
// }

// export const uhyo = createUser('uhyo', 26);
// // 'uhyo (26)「こんにちは」'と出力される
// console.log(getMessage(uhyo, 'こんにちは'));

// クラスに書き換え
export class User {
  readonly #name: string;
  readonly #age: number;

  constructor(name: string, age: number) {
    if (name === '') {
      throw new Error('名前は空にできません！');
    }
    this.#name = name;
    this.#age = age;
  }

  // 簡略化
  // constructor(readonly name: string, readonly age: number) {}

  getMessage(message: string): string {
    return `${this.#name} (${this.#age})「${message}」`;
  }
}

export const uhyo = new User('uhyo', 26);
// 'uhyo (26)「こんにちは」'と出力される
console.log(uhyo.getMessage('こんにちは'));
