export type Fruit = 'apple' | 'banana' | 'orange';

// FruitNumbers は {
//   apple: number;
//   banana: number;
//   orange: number;
// } 型
export type FruitNumbers = {
  [P in Fruit]: number;
};

export const number: FruitNumbers = {
  apple: 1,
  banana: 2,
  orange: 3,
};
