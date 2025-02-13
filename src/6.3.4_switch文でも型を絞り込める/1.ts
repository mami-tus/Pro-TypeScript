export type Animal = {
  tag: 'animal';
  species: string;
};
export type Human = {
  tag: 'human';
  name: string;
};
export type User = Animal | Human;

export function getUserName(user: User): string {
  switch (user.tag) {
    case 'human':
      return user.name;
    case 'animal':
      return '名無し';
  }
}
