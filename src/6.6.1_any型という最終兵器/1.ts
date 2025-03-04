export function doWhatever(obj: any) {
  // 好きなプロパティにアクセスできる
  console.log(obj.name.name);
  // 関数呼び出しもできる
  obj();
  // 計算もできる
  const result = obj * 10;
  return result;
}

// 全部コンパイルエラーが発生しないがランタイムエラーになる
doWhatever(3);
doWhatever({
  user: {
    name: 'uhyo',
  },
});
doWhatever(() => {
  console.log('uhyo');
});
