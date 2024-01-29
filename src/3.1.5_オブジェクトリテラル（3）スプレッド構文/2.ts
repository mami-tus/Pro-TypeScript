export const obj1 = {
  foo: 123,
  bar: 456,
  baz: 789,
};

export const obj2 = {
  ...obj1,
  foo: -9999,
};

// obj2は { foo: -9999, bar: 456, baz: 789 } となる
console.log(obj2);
