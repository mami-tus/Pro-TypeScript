function makeTriple<T>(x: T, y: T, z: T): T[] {
  return [x, y, z];
}
// string[]型となる
const stringTriple = makeTriple('foo,', 'bar', 'baz');

// 以下もstring[]型とな理、コンパイルエラー
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// const mixed = makeTriple('foo', 123, false);
