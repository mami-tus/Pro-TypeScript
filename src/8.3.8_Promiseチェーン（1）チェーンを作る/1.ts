import { readFile } from 'fs/promises';

export const p = readFile('uhyo.txt', 'utf8');

export const p2 = p.then((result) => result + result);

p2.then((result) => {
  console.log(result);
});
