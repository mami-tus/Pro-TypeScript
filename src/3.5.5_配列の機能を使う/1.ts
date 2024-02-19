export const arr = [1, 10, 100];
arr.push(1000);
console.log(arr); // [ 1, 10, 100, 1000 ]が表示される
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// arr.push('foobar');
// arrがnumber[]型なので、string型の値を追加することはできない
