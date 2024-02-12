type MyObj = {
  readonly foo: number;
};
export const obj: MyObj = {
  foo: 123,
};
// error TS2540: Cannot assign to 'foo' because it is a read-only property.
// obj.foo = 0;
