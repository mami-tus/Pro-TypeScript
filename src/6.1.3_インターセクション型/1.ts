export type Animal = {
  species: string;
  age: number;
};

export type Human = Animal & {
  name: string;
};

export const tama: Animal = {
  species: 'Felis silvestris catus',
  age: 3,
};
export const uhyo: Human = {
  species: 'Homo sapiens sapiens',
  age: 26,
  name: 'uhyo',
};
