export const foo = { num: 1234 };
export const bar = foo;
console.log(bar.num); // 1234
bar.num = 0;
console.log(bar.num); // 0
