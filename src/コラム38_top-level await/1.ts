import { readFile, writeFile } from 'fs/promises';

const fooContent = await readFile('uhyo.txt', 'utf8');
// 2倍にしてbar.txtに書き込む
await writeFile('uhyo.txt', fooContent + fooContent);
console.log('書き込み完了しました');
