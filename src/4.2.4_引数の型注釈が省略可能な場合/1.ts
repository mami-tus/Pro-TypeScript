export const xRepeat = (arg: number): string => 'x'.repeat(arg);

export type F = (arg: number) => string;
// この関数式は引数の型を書かなくてもOK
export const xRepeat2: F = (num) => 'x'.repeat(num);
