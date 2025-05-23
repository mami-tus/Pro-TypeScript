import { readFileSync } from 'fs';

const data = readFileSync('uhyo.txt', { encoding: 'utf8' });

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
