export const obj = {
  foo: 123,
  bar: 'string',
  baz: false,
};

export const { foo, ...restObj } = obj;
console.log(foo); // 123
console.log(restObj); // { bar: 'string', baz: false }
