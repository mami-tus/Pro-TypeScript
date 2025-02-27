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
    // error TS2339: Property 'name' does not exist on type 'User'.
    // Property 'name' does not exist on type 'Animal'.
    return (users as Human[]).map((user) => user.name);
  }
  return undefined;
}
