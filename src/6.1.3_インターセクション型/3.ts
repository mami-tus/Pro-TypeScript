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

// error TS2322: Type 'string' is not assignable to type 'Animal & string'.
// Type 'string' is not assignable to type 'Animal'.
// export const cat1: Animal & string = 'cat';

// error TS2322: Type '{ species: string; age: number; }' is not assignable to type 'Animal & string'.
// Type '{ species: string; age: number; }' is not assignable to type 'string'.
// export const cat2: Animal & string = {
//   species: 'Felis silvestris catus',
//   age: 3,
// };
