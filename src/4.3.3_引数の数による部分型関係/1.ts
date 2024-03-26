export type UnaryFunc = (arg: number) => number;
export type BinaryFunc = (left: number, right: number) => number;

export const double: UnaryFunc = (arg) => arg * 2;
export const add: BinaryFunc = (left, right) => left + right;

// UnaryFunc を BinaryFunc として扱うことができる
export const bin: BinaryFunc = double;
// 20 が表示される
console.log(bin(10, 100));
