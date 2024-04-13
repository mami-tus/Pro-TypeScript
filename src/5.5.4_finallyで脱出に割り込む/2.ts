try {
  console.log('エラーを発生させます');
  throwError();
  console.log('エラーを発生させました');
} finally {
  console.log('finallyブロック');
}
console.log('try文の後ろ');

export function throwError() {
  throw new Error('エラーが発生しました！！！！！');
}
