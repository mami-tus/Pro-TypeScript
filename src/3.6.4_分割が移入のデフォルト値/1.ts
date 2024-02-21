// オプショナルなプロパティを持つオブジェクト型
export type Obj = { foo?: number };
export const obj1: Obj = {};
export const obj2: Obj = { foo: -1234 };

// 変数fooには500が代入される
export const { foo = 500 } = obj1;
console.log(foo); // 500
// 上記のコードは以下のように書き換えることができる
export const foo2 = obj1.foo !== undefined ? obj1.foo : 500;
console.log(foo2); // 500
export const { foo: bar = 500 } = obj2;
console.log(bar); // -1234
