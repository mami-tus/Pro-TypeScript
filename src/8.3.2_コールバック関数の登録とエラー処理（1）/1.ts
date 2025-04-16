import { readFile } from 'fs/promises';

const p = readFile('uhyo.txt', 'utf8');

p.then((result) => {
  console.log('1');
});
p.then((result) => {
  console.log('2');
});
p.then((result) => {
  console.log('3');
});
