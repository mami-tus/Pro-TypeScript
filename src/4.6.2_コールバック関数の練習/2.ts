function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
}

export const data = [1, -3, -2, 8, 0, -1];
export const result = map(data, (x) => x >= 0);
// 期待値: [true, false, false, true, true, false]
console.log(result);
