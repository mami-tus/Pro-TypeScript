import { readFile, writeFile } from 'fs/promises';

export const main = async function () {
  const fooContent = await readFile('foo.txt', 'utf8');
  // 2倍にしてbar.txtに書き込む
  await writeFile('uhyo.txt', fooContent + fooContent);
  console.log('書き込み完了しました');
};
