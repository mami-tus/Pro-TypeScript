export type Greetable = {
  greet: (str: string) => string;
};
export const obj: Greetable = {
  greet: (str) => `Hello, ${str}!`,
};
