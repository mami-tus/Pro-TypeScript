export const obj1 = {
  bar: 456,
  baz: 789,
};

export const obj2 = {
  foo: 123,
  ...obj1,
};

// obj2は { foo: 123, bar: 456, baz: 789 } となる
console.log(obj2);
