import { readFile } from 'fs/promises';

export const repeat10 = (str: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.repeat(10));
    }, 1000);
  });

readFile('uhyo.txt', 'utf8')
  .then((result) => repeat10(result))
  .then((result) => {
    console.log(result);
  });

export const p1 = readFile('uhyo.txt', 'utf8');
export const p3 = p1.then((result) => {
  const p2 = repeat10(result);
  return p2;
});
p3.then((result) => {
  console.log(result);
});
