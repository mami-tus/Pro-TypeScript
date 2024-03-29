function repeat<T>(element: T, length: number): T[] {
  // const result: T[] = [];
  // for (let i = 0; i < length; i++) {
  //   result.push(element);
  // }
  // return result;

  // 上記は下記のように書き換えることができる
  return Array.from({ length }, () => element);
}

// [ 'a', 'a', 'a', 'a', 'a' ] が表示される
console.log(repeat<string>('a', 5));
// [ 123, 123, 123 ] が表示される
console.log(repeat<number>(123, 3));
