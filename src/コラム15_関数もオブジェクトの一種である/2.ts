export function foo(): void {}

type HasName = { name: string };
export const obj: HasName = foo;
