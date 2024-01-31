export const foo = { num: 1234 };
export const bar = foo;
export const baz = { num: 1234 };

console.log(foo === bar); // true
console.log(foo === baz); // false
