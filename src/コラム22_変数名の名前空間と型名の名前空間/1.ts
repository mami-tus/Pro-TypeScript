export type Item = {
  name: string;
  price: number;
};

export const apple: Item = {
  name: 'りんご',
  price: 200,
};
export const orange: Item = {
  name: 'みかん',
  price: 150,
};

console.log(apple, orange);
