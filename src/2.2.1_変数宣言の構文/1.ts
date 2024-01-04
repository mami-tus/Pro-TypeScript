/*
複数の変数の宣言を,でつなげることも可能だが、メンテナンス性が落ちるためあまり人気がなく
変数ひとつにに対してconstを書くやり方が主流
*/
export const greeting = 'Hello,',
  target = 'world!',
  text = greeting + target;
console.log(text);
