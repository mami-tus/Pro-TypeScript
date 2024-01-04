/*
Node.js で ECMAScript モジュールを使用している場合
（.mjs 拡張子のファイルまたは "type": "module" が package.json に設定されている場合）、
ファイルのインポート時には拡張子を明示的に指定する必要がある。
./1 ではなく ./1.js とする必要がある。
*/
import { greeting } from './1.js';

const text = greeting + 'world!';
/* モジュールをインポートすると、そのモジュールの全てのトップレベルコードが実行されるため、
Hello,world!
Hello,world!
と表示される
*/
console.log(text);
