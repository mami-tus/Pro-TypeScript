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

//  error TS2339: Property 'name' does not exist on type 'User'.
// Property 'name' does not exist on type 'Animal'.
// function getName(user: User): string {
//   return user.name;
// }
