export type User = { name: string; age: number };
// 型推論で{ name: string; age: number; telNumber: string; }型になる
export const obj = {
  name: 'uhyo',
  age: 26,
  telNumber: '000-0000-0000',
};
// { name: string; age: number; telNumber: string; }型 が User型の部分型であるためエラーにならない
const u: User = obj;
