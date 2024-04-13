export function getAverage(nums: number[]) {
  if (nums.length === 0) {
    return undefined;
  }
  return nums.reduce((a, b) => a + b) / nums.length;
}

console.log(getAverage([1, 2, 3])); // 2
console.log(getAverage([])); // undefined
