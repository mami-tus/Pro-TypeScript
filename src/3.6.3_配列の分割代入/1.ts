export const arr = [1, 2, 4, 8, 16, 32];

export const [first, second, third] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 4

// 分割代入を使わない場合
export const one = arr[0];
export const two = arr[1];
export const three = arr[2];
