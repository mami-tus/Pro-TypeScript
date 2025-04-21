import { readFile } from 'fs/promises';

export const p = readFile('uhyo.txt', 'utf8')
  .finally(() => console.log('uhyo.txtの読み込みが完了しました'))
  .catch(() => 'uhyo.txtが見つかりませんでした')
  .then((result) => {
    console.log(result);
  });
