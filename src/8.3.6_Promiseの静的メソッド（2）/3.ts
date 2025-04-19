import { readFile } from 'fs/promises';

export const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

export const p = Promise.race([
  readFile('uhyo.txt', 'utf8'),
  sleepReject(5000),
]);

p.then(
  (result) => {
    console.log('成功', result);
  },
  (error: unknown) => {
    console.log('uhyo.txtの読み込みに失敗', error);
  }
);
