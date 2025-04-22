import { readFile } from 'fs/promises';

export const p1 = readFile('uhyo.txt', 'utf8');
export const p2 = p1.then((result) => {
  throw new Error('Error!!!!');
});
p2.then((result) => {
  console.log(result);
});
