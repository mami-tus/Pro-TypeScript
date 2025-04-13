import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);

console.log(filePath, fileDir);
// srcディレクトリ内のファイルパスを指定
const srcFilePath = path.join(fileDir, '../../uhyo.txt');

readFile(srcFilePath, 'utf8', (err, result) => {
  if (err) {
    console.error('ファイル読み込みエラー:', err.message);
    return;
  }
  console.log(result);
});
console.log('読み込み開始');
