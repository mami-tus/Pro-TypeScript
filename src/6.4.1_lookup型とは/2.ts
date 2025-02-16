export type Human = {
  type: 'human';
  name: string;
  age: bigint;
};

export function setAge(human: Human, age: Human['age']) {
  return { ...human, age };
}

export const uhyo: Human = {
  type: 'human',
  name: 'uhyo',
  age: 26n, // ここをBigIntリテラルに変更
};

export const uhyo2 = setAge(uhyo, 27n); // ここをBigIntリテラルに変更
console.log(uhyo2); // { type: 'human', name: 'uhyo', age: 27n } と表示される
