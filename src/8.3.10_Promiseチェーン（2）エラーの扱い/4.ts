import { readFile } from 'fs/promises';

export const p = readFile('uhyo1.txt', 'utf8');

export const p2 = p.then((result) => {
  console.log('成功', result);
});
export const p3 = p.catch((error) => {
  console.log('失敗', error);
});
