export type Func = <T>(arg: T, num: number) => T[];

// 以下の関数式の引数の型が省略できるのは、型引数が関数の引数として使われているため
export const repeat: Func = (element, length) => {
  return Array.from({ length }, () => element);
};
