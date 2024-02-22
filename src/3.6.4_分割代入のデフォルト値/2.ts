export const obj = { foo: null, bar: undefined };

const { foo, bar = 'default' } = obj;
console.log(foo); // null
console.log(bar); // default
