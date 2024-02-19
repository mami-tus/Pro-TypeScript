export const arr = [1, 10, 100];
console.log(arr.includes(100)); // trueが表示される
console.log(arr.includes(50)); // falseが表示される
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(arr.includes('foobar'));
// arrがnumber[]型なので、string型の値を渡すことはできない
