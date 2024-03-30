export function repeat<T>(element: T, length: number): T[] {
  // const result: T[] = [];
  // for (let i = 0; i < length; i++) {
  //   result.push(element);
  // }
  // return result;

  // 上記は下記のように書き換えることができる
  return Array.from({ length }, () => element);
}

// [ 'a', 'a', 'a', 'a', 'a' ] が表示される
// 型は function repeat<string>(element: string, length: number): string[] となる
console.log(repeat<string>('a', 5));
// [ 123, 123, 123 ] が表示される
console.log(repeat<number>(123, 3));

//  error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// repeat<string>(0, 10);
