export const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

export const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums)); // 15
console.log(sum(1, 2, 3, 4, 5)); // 上記と同じ意味
// 普通の引数とスプレッド構文を組み合わせることもできる
console.log(sum(...nums, 6, ...nums));
