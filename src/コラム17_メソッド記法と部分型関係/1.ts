export type HasName = { name: string };
export type HasNameAndAge = { name: string; age: number };
export type Obj = {
  func: (arg: HasName) => string; // 通常の関数型
  method(arg: HasName): string; // メソッド記法
};

export const something: Obj = {
  func: (user) => user.name,
  method: (user) => user.name,
};

export const getAge = (user: HasNameAndAge) => String(user.age);

// error TS2322: Type '(user: HasNameAndAge) => string' is not assignable to type '(arg: HasName) => string'.
// something.func = getAge;
// (user: HasNameAndAge) => string は (arg: HasName) => string の部分型ではないので getAge を代入することはできない

// これはエラーにならない
// 型安全性が壊れるので、メソッド記法で関数型を定義するのは避ける
something.method = getAge;
