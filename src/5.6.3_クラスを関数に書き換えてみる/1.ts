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

// プライベートプロパティにすることでカプセル化する
// 外から見てUserオブジェクトにできることはgetMessageメソッドを介してメッセージを生成することだけ
// getMessageがUserクラス本体だと言っても過言ではない

// Userクラスのインスタンスを作るのは関数を一つ作っているのと変わらなくなる
// getMessage関数を返す関数を作る
export const createUser = (
  name: string,
  age: number
): ((message: string) => string) => {
  if (name === '') {
    throw new Error('名前は空にできません！');
  }
  return (message: string) => `${name} (${age})「${message}」`;
};

export const getMessage = createUser('uhyo', 26);

// 'uhyo (26)「こんにちは」'と出力される
console.log(getMessage('こんにちは'));
