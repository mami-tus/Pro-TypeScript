// repeat関数の型は <T>(element: T, length: number) => T[] になる
export const repeat = function <T>(element: T, length: number): T[] {
  return Array.from({ length }, () => element);
};
