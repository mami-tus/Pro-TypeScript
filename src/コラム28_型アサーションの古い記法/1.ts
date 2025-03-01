export type Animal = {
  tag: 'animal';
  species: string;
};
export type Human = {
  tag: 'human';
  name: string;
};
export type User = Animal | Human;

export function getNamesIfAllHuman(
  users: readonly User[]
): string[] | undefined {
  if (users.every((user) => user.tag === 'human')) {
    return (<Human[]>users).map((user) => user.name);
  }
  return undefined;
}
