import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('数値を入力してください:', (line) => {
  // 1000 が暗黙的に文字列に変換されて結合される
  const result = line + 1000;
  console.log(result);
  rl.close();
});
