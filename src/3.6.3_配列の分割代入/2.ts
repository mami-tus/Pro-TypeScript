export const obj = {
  arr: [1, 2, 4, 8, 16, 32],
  bar: 'bar',
};

// abj.arrの最初の要素を変数firstに、2番目の要素を変数secondに、3番目の要素を変数thirdに代入
const {
  arr: [first, second, third],
} = obj;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 4
