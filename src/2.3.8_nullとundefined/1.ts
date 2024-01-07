export const val1 = null;
export const val2 = undefined;

// null undefined true true と表示される
// typeof でnullの型を調べると object と表示される（JavaScriptの初期の設計上のバグらしい）
console.log(val1, val2, val1 === null, val2 === undefined);
