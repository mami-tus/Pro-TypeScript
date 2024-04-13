try {
  const bigInt = BigInt('foobar'); // エラーが発生する
  // よって下のconsole.logは実行されない
  console.log(bigInt);
} catch (err) {
  // SyntaxError: Cannot convert foobar to a BigInt
  console.log(err);
}
