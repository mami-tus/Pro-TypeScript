import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('名前を入力してください:', (name) => {
  // 文字列が入力されるとここが実行される
  console.log('こんにちは、' + name + 'さん');
  rl.close();
});
