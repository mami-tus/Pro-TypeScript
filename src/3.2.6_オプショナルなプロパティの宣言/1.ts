type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

export const obj: MyObj = {
  foo: true,
  bar: false,
};
export const obj2: MyObj = {
  foo: true,
  bar: false,
  baz: 1234,
};
console.log(obj.baz); // undefined
console.log(obj2.baz); // 1234
