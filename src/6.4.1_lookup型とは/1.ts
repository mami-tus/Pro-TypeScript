export type Human = {
  type: 'human';
  name: string;
  age: number;
};

export function setAge(human: Human, age: Human['age']) {
  return { ...human, age };
}

export const uhyo: Human = {
  type: 'human',
  name: 'uhyo',
  age: 26,
};

export const uhyo2 = setAge(uhyo, 27);
console.log(uhyo2); // { type: 'human', name: 'uhyo', age: 27 } と表示される
