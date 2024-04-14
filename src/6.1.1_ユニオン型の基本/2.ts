export type Animal = {
  species: string;
};
export type Human = {
  name: string;
};

export type User = Animal | Human;

// このオブジェクトはAnimal型なのでUser型に代入できる
export const tama: User = {
  species: 'Felis silvestris catus',
};
// このオブジェクトはHuman型なのでUser型に代入できる
export const uhyo: User = {
  name: 'uhyo',
};
// error TS2353: Object literal may only specify known properties, and 'title' does not exist in type 'User'.
// export const book: User = {
//   title: 'Software Design',
// };
