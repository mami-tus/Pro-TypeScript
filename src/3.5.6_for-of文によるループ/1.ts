export const arr = [1, 10, 100];

for (const elm of arr) {
  // 各ループで変数が作り直されるのでconstで問題ない
  console.log(elm);
}
