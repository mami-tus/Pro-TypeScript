import { readFile } from 'fs/promises';

export const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

export const p = Promise.any([readFile('uhyo.txt', 'utf8'), sleepReject(5000)]);

p.then((result) => {
  console.log(result);
});
