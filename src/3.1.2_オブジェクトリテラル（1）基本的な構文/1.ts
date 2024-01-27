import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('名前を入力してください:', (input) => {
  const name = input ? input : '名無し';
  const user = {
    name: name,
    age: 20,
  };
  console.log(`こんにちは、${user.name}さん！`);
  rl.close();
});
