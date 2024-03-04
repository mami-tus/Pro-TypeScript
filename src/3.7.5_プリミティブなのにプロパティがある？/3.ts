// これらはOK
export let val: {} = 123;
val = 'foobar';
val = { num: 1234 };
// これらはコンパイルエラー
// val = null; // error TS2322: Type 'null' is not assignable to type '{}'.
// val = undefined; // error TS2322: Type 'undefined' is not assignable to type '{}'.
