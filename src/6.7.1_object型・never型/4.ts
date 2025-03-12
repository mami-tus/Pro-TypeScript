// 必ず例外が発生するので関数の返り値を得ることが不可能なため、never型を返す
export function thrower(): never {
  throw new Error('error!!!');
}

// コンパイルエラーは起きない
export const result: never = thrower();

const str: string = result;
console.log(str);
