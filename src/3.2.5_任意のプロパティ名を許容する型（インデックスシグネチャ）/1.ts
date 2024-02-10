type PrinceData = {
  [key: string]: number;
};
const data: PrinceData = {
  apple: 220,
  coffee: 120,
  bento: 500,
};
data.chicken = 250;
// エラー: Type 'string' is not assignable to type 'number'.
// data.弁当 = 'foo';
