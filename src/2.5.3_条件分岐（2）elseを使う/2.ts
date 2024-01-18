import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('数値を入力してください:', (line) => {
  const num = Number(line);
  if (num < 0) {
    console.log('numは負の数です');
  } else if (num === 0) {
    console.log('numは0です');
  } else {
    console.log('numは正の数です');
  }
  rl.close();
});
