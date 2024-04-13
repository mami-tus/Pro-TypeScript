// try-catch-finallyの例
try {
  console.log('tryブロック');
} catch (err) {
  console.log('catchブロック');
} finally {
  console.log('finallyブロック');
}

// try-finallyの例
try {
  console.log('tryブロック');
} finally {
  console.log('finallyブロック');
}

try {
  console.log('tryブロック1');
  throwError();
  // 例外が発生するので、この行は実行されない
  console.log('tryブロック2');
} catch (err) {
  console.log('catchブロック');
} finally {
  // 例外が発生してもfinallyブロックは実行される
  console.log('finallyブロック');
}
export function throwError() {
  const error = new Error('エラーが発生しました！！！！！');
  throw error;
}
