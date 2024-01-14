import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('名前を入力してください:', (name) => {
  // nameが空文字だとfalseになり、'名無し'が代入される
  const displayName = name || '名無し';
  console.log(`こんにちは、${displayName}さん`);
  rl.close();
});

/*
  x && yについてxがtrueならy、falseならxが返る
  「xが真であればyをチェックする」という条件分岐に役立ちます。
 */
/*
  x || yについてxがtrueならx、falseならyが返る
  「xが偽であればyをチェックする」という条件分岐や、デフォルト値を設定する際に役立ちます。
*/
