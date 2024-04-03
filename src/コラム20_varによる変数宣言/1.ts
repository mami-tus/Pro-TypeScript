export function sabayomi(age: number) {
  var lie = age;
  if (age >= 20) {
    var lie = age - 5;
  }
  return lie;
}
// varにはブロックスコープがないため、変数lieは関数内で共有される
// varは複数回宣言できるため、同じ変数名を使ってもエラーにならない
