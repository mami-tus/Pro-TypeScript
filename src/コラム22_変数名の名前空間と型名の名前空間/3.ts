// 型名の名前空間にItemを作成
export type Item = {
  name: string;
  price: number;
};
// 変数名の名前空間にItemを作成
export const Item: Item = {
  name: 'りんご',
  price: 200,
};
// このItemは型名のItem
export const orange: Item = {
  name: 'みかん',
  price: 150,
};
// このItemは変数名のItem
console.log(Item);
