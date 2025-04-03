import { Animal, tama } from './animal.js';

// 'tama' cannot be used as a value because it was imported using 'import type'.ts(1361)
// const myCat: Animal = {
//   ...tama,
// };

// これはOK
const otherCat: typeof tama = {
  species: 'Felis catus',
  age: 5,
};
