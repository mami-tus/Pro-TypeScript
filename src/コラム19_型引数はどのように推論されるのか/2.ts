export function double<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}

export type NumberToNumber = (arg: number) => number;

export const plus2: NumberToNumber = double((x) => x + 1);
console.log(plus2(10)); // 12と表示
