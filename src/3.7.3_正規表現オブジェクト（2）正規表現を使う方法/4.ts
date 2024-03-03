export const result = 'Hello , abbbbbbc world! abc'.match(/a(b+)c/g);
if (result !== null) {
  console.log(result); // [ 'abbbbbbc', 'abc' ] キャプチャリンググループは無視される
}
