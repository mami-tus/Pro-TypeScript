export const p = Promise.reject('foo');
export const p2 = new Promise<number>((resolve, reject) => {
  reject('foo');
});
