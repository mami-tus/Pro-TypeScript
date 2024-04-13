try {
  throwError();
  // tryブロックから脱出するのでここは実行されない
  console.log('これは表示されない');
} catch (err) {
  console.log(err);
}
console.log('おわり');

export function throwError() {
  const error = new Error('エラーが発生しました！！！！！');
  throw error;
  // 関数から脱出するのでここは実行されない
  console.log('これも表示されない');
}
