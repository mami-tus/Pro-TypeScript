// Hell, foobar world! abbc と表示される（gフラグを持たない場合一番最初にマッチした部分だけ置換される）
console.log('Hell, abbbbbbbc world! abbc'.replace(/ab+c/, 'foobar'));
// Hell, foobar world! foobar と表示される（gフラグを持つ場合全てのマッチした部分が置換される）
console.log('Hell, abbbbbbbc world! abbc'.replace(/ab+c/g, 'foobar'));
