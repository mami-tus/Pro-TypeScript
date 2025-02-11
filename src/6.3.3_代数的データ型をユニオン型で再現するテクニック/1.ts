export type Animal = {
  tag: 'animal';
  species: string;
};
export type Human = {
  tag: 'human';
  name: string;
};
export type User = Animal | Human;

export const tama: User = {
  tag: 'animal',
  species: 'Felis silvestris catus',
};
export const uhyo: User = {
  tag: 'human',
  name: 'uhyo',
};

// P
