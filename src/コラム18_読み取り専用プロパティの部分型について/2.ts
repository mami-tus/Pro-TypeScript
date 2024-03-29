function fillZero(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// fillZero には number[] 型を与えることができる
export const nums1: number[] = [1, 10, 100];
fillZero(nums1);
console.log(nums1); // [0, 0, 0]

// fillZero に readonly number[] 型を与えるのはコンパイルエラー
export const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];
//  error TS2345: Argument of type 'readonly number[]' is not assignable to parameter of type 'number[]'.
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
// fillZero(nums2);
