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

// export const alien: User = {
//   // 型 '"alien"' を型 '"animal" | "human"' に割り当てることはできません。ts(2322)
//   tag: 'alien',
//   name: 'gray',
// };

export function getUserName(user: User) {
  if (user.tag === 'human') {
    // ここではuserはHuman型として扱われる
    return user.name;
  } else {
    // ここではuserはAnimal型として扱われる
    return '名無し';
  }
}

console.log(getUserName(tama)); // "名無し"
console.log(getUserName(uhyo)); // "uhyo"
