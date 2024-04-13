console.log('エラーを発生させます');
throwError();
console.log('エラーを発生させました');

function throwError() {
  const error = new Error('エラーが発生しました！！！！！'); // 文字列がエラーメッセージになる
  throw error;
}
// エラーが発生したらプログラムの実行は中断される
