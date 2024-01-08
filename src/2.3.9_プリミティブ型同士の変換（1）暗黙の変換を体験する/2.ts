import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('数値を入力してください:', (line) => {
  // 1000を足して出力する
  // line は文字列なので 12341000 が入力されました と表示される
  console.log(`${line + 1000} が入力されました`);
  rl.close();
});
