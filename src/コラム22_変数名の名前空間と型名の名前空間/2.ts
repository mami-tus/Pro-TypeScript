export type Item = {
  name: string;
  price: number;
};

export const apple: Item = {
  name: 'りんご',
  price: 200,
};
// error TS2749: 'apple' refers to a value, but is being used as a type here. Did you mean 'typeof apple'?
// export const orange: apple = {
//   name: 'みかん',
//   price: 150,
// };
// error TS2693: 'Item' only refers to a type, but is being used as a value here.
// console.log(Item);
