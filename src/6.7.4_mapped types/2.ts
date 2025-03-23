export type Fruit = 'apple' | 'banana' | 'orange';

// FruitArrays は {
//   apple: "apple"[];
//   banana: "banana"[];
//   orange: "orange"[];
// } 型
export type FruitArrays = {
  [P in Fruit]: P[];
};

export const arrays: FruitArrays = {
  apple: ['apple', 'apple'],
  banana: ['banana', 'banana', 'banana'],
  orange: [],
};
