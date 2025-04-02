import { Animal, tama2 } from './animal2.js';

// 'tama2' cannot be used as a value because it was exported using 'export type'.
// const myCat: Animal = tama2;

const myCat: typeof tama2 = {
  species: 'Felis silvestris catus',
  age: 0,
};
