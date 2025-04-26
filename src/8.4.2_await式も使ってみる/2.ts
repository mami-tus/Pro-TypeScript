async function get3(): Promise<number> {
  console.log('get3が呼び出されました');
  return 3;
}

console.log('get3を呼び出します');
export const p = get3();
p.then((num) => {
  console.log(`num is ${num}`);
});
console.log('get3を呼び出しました');
