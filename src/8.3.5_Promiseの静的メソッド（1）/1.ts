export const p = Promise.resolve(100);
export const p2 = new Promise<number>((resolve) => {
  resolve(100);
});

p.then((result) => {
  console.log(`resultは${result}です`);
});
p2.then((result) => {
  console.log(`resultは${result}です`);
});
