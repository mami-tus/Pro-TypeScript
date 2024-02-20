export const arr = [1, 10, 100];

// for (const elm of arr) {
//   // 以下はエラーになる
//   // error TS2588: Cannot assign to 'elm' because it is a constant.
//   elm *= 10;
//   console.log(elm);
// }

// ループ内で変数を再代入するためにはletを使う
for (let elm of arr) {
  elm *= 10;
  console.log(elm);
}
// [ 1, 10, 100 ] のまま
console.log(arr);
