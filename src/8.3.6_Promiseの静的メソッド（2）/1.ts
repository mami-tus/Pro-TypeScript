import { readFile } from 'fs/promises';

export const p = Promise.all([
  readFile('uhyo.txt', 'utf8'),
  readFile('uhyo.txt', 'utf8'),
  readFile('uhyo.txt', 'utf8'),
]);

p.then(([foo, bar, baz]) => {
  console.log('foo.txtの内容:', foo);
  console.log('bar.txtの内容:', bar);
  console.log('baz.txtの内容:', baz);
});
