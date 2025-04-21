import { readFile } from 'fs/promises';

export const p = readFile('uhyo.txt', 'utf8')
  .catch(() => 'uhyo.txtが見つかりませんでした')
  .then((result) => {
    console.log(result);
  });
