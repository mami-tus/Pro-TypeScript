import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('名前を入力してください:', (input) => {
  const name = input ? input : '名無し';
  const user = {
    name, // オブジェクトリテラルのプロパティ名と変数名が同じ場合、プロパティ名を省略できる
    age: 20,
  };
  console.log(`こんにちは、${user.name}さん！`);
  rl.close();
});
