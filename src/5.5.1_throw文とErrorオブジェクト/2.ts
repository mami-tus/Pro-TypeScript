export function getAverage(nums: number[]) {
  if (nums.length === 0) {
    throw new Error('配列が空です');
  }
  return nums.reduce((a, b) => a + b) / nums.length;
}

console.log(getAverage([1, 2, 3])); // 2
getAverage([]); // Error: 配列が空です
