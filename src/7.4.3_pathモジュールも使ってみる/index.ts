import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);

console.log(filePath, fileDir);
const dataFile = path.join(fileDir, '../../uhyo.txt');
console.log(dataFile);
const data = readFileSync(dataFile, { encoding: 'utf8' });

// uhyoの数を数える
let count = 0;
let currentIndex = 0;
while (true) {
  const nextIndex = data.indexOf('uhyo', currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(`uhyoの数: ${count}`);
