// repeatの型引数をstring型のnameプロパティを持つオブジェクトに制限する
export const repeat = <
  T extends {
    name: string;
  }
>(
  element: T,
  length: number
): T[] => {
  return Array.from({ length }, () => element);
};

export type HasNameAndAge = {
  name: string;
  age: number;
};

// 出力結果
// [ { name: 'uhyo', age: 26 }, { name: 'uhyo', age: 26 }, { name: 'uhyo', age: 26 } ] が表示される
console.log(repeat<HasNameAndAge>({ name: 'uhyo', age: 26 }, 3));

// これはコンパイルエラー
// error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; }'.
// repeat('a', 3);
