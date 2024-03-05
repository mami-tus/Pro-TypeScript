export type Human = {
  height: number;
  weight: number;
};
// 省略形
export const calcBMI = ({ height, weight }: Human): number =>
  weight / height ** 2;

// 普通の書き方
// export const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };

// function 関数式の場合
// export const calcBMI = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };

export const uhyo: Human = {
  height: 1.84,
  weight: 72,
};
console.log(calcBMI(uhyo)); // 21.266540642722116
