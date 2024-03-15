// 返り値の方がないときはvoidが型推論され、returnしなくてもエラーにならない
export function range(min: number, max: number) {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
}

const arr = range(5, 10);
//  error TS2488: Type 'void' must have a '[Symbol.iterator]()' method that returns an iterator.
// for (const value of arr) console.log(value);
