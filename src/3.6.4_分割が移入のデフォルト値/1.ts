// オプショナルなプロパティを持つオブジェクト型
export type Obj = { foo?: number };
export const obj1: Obj = {};
export const obj2: Obj = { foo: -1234 };

// 変数fooには500が代入される
export const { foo = 500 } = obj1;
console.log(foo); // 500

export const { foo: bar = 500 } = obj2;
console.log(bar); // -1234
