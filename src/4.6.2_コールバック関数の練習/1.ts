function map<T>(
  array: number[],
  callback: (value: number) => number
): number[] {
  const result: number[] = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
}

export const data = [1, 1, 2, 3, 5, 8, 13];
export const result = map(data, (x) => x * 10);
// 期待値: [10, 10, 20, 30, 50, 80, 130]
console.log(result);
