export const r = /ab+c/;

console.log(r.test('abbbbc')); // true
console.log(r.test('Hello, abc world!')); // true
console.log(r.test('ABC')); // false
console.log(r.test('こんにちは')); // false
