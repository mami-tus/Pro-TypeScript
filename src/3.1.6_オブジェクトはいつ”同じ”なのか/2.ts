export const foo = { num: 1234 };
export const bar = { ...foo }; // fooのプロパティをコピーして得られた新しいオブジェクトになる
console.log(bar.num); // 1234
bar.num = 0;
console.log(foo.num); // 1234
// スプレッド構文はオブジェクトリテラルの中で使える構文であり
// オブジェクトリテラルは新しいオブジェクトを作る構文なのでコピーになっている
