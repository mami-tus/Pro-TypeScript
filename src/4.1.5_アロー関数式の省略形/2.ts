export type Human = {
  height: number;
  weight: number;
};
export type ReturnObj = {
  bmi: number;
};

// 正しい書き方
export const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({
  // 返り値の指揮としてオブジェクトリテラルを使う場合、()で囲む
  bmi: weight / height ** 2,
});

// error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// {} がオブジェクトリテラルではなく通常のアロー関数の中身を囲む {} と解釈されてしまう
// export const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
//   bmi: weight / height ** 2;
// };
