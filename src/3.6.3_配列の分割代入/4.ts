export const arr = [1, 2, 4, 8, 16, 32];

export const [, foo, , bar, , baz] = arr;
console.log(foo); // 2
console.log(bar); // 8
console.log(baz); // 32
