export type Animal = {
  tag: 'animal';
  species: string;
};
export type Human = {
  tag: 'human';
  name: string;
};
export type Robot = {
  tag: 'robot';
  name: string;
};
export type User = Animal | Human | Robot;

export function getUserName1(user: User): string {
  if (user.tag === 'human') {
    return user.name;
  } else {
    return '名無し';
  }
}

export function getUserName2(user: User): string {
  switch (user.tag) {
    case 'human':
      return user.name;
    case 'animal':
      return '名無し';
    case 'robot':
      return `CPU ${user.name}`;
  }
}
