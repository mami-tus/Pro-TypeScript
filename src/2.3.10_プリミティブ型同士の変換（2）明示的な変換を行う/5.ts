// 数値から文字列へ
export const str1 = String(1234.5);
console.log(str1); // '1234.5' と表示される

// 真偽値から文字列へ
export const str2 = String(true);
console.log(str2); // 'true' と表示される

// null や undefined から文字列へ
export const str3 = String(null);
export const str4 = String(undefined);
console.log(str3); // 'null' と表示される
console.log(str4); // 'undefined' と表示される
