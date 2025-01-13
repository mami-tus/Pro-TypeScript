export type Human = {
  name: string;
  age: number | undefined;
};

export const uhyo: Human = {
  name: 'uhyo',
  age: 25,
};

export const john: Human = {
  name: 'John Smith',
  age: undefined,
};

// プロパティ 'age' は型 '{ name: string; }' にありませんが、型 'Human' では必須です。ts(2741)
// ageを省略するとコンパイルエラーとなるので、書き忘れを防げる
// const taro: Human = {
//   name: 'Taro Yamada',
// };
