export const nested = {
  num: 123,
  obj: {
    foo: 'hello',
    bar: 'world',
  },
};

export const {
  num,
  obj: { foo },
} = nested;
console.log(num); // 123
console.log(foo); // hello
