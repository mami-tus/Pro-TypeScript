import { increment, value } from './counter.js';

increment();
console.log(`カウンタの値は${value}です`);
increment();
console.log(`カウンタの値は${value}です`);
increment();
console.log(`カウンタの値は${value}です`);

// Cannot assign to 'value' because it is an import.ts(2632)
// 変数を変更できるのは変数を宣言したモジュール内だけ
// value = 100;
console.log(`カウンタの値は${value}です`);
