export const obj1 = {
  foo: 123,
  bar: 456,
};

export const obj2 = {
  bar: -999,
  baz: -9999,
};

export const obj3 = {
  ...obj1,
  ...obj2,
};

// obj3は { foo: 123, bar: -999, baz: -9999 } となる
console.log(obj3);
