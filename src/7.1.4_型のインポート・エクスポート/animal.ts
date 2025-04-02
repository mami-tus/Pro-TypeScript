// export type Animal = {
//   species: string;
//   age: number;
// };

// 以下の書き方もできる
type Animal = {
  species: string;
  age: number;
};

const tama: Animal = {
  species: 'Felis silvestris catus',
  age: 3,
};

export { Animal, tama };
