export const input1 = '123',
  input2 = '';

// !!式は式をboolean型に変換する
// Boolean(式)と同じ
export const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty); // true
export const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty); // false
