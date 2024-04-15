export type Human = {
  name: string;
  age?: number;
};

export const uhyo: Human = {
  name: 'uhyo',
  age: 26,
};
// ageが実際にない
export const john: Human = {
  name: 'John Smith',
};
