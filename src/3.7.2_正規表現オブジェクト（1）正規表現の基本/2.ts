export const r = /^abc/;
console.log(r.test('abcdef')); // true
console.log(r.test('123abc')); // false
