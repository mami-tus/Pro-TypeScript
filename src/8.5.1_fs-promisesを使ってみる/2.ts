import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);

const dataFile = path.join(fileDir, '../../uhyo.txt');

sleep(1).then(() => {
  console.log('1秒経過しました');
  process.exit();
});

const data = await readFile(dataFile, { encoding: 'utf8' });

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
