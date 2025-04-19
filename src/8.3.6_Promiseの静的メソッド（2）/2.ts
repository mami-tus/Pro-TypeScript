import { readFile } from 'fs/promises';

export const p = Promise.race([
  readFile('uhyo.txt', 'utf8'),
  readFile('uhyo.txt', 'utf8'),
  readFile('uhyo.txt', 'utf8'),
]);

p.then((result) => {
  console.log('uhyo.txtの内容:', result);
});
