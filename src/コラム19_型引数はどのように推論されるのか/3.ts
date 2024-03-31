export function double<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}
// error TS18046: 'x' is of type 'unknown'.
// export const plus2 = double((x) => x + 1);

// 以下のように型引数を指定することでエラーが解消
export const plus2 = double<number>((x) => x + 1);
