import { readFile } from 'fs/promises';

const p = readFile('uhyo.txt', 'utf8');

p.then((data) => {
  console.log(data);
});
