export type Animal = {
  species: string;
  age: string;
};
export type Human = {
  name: string;
  age: number;
};

export type User = Animal | Human;

export const tama: User = {
  species: 'Felis silvestris catus',
  age: '永遠の17歳',
};
// このオブジェクトはHuman型なのでUser型に代入できる
export const uhyo: User = {
  name: 'uhyo',
  age: 26,
};

export function showAge(user: User) {
  // コンパイルエラーにならない
  const age = user.age; // ageは string | number型
  console.log(age);
}

showAge(tama); // 永遠の17歳
showAge(uhyo); // 26
