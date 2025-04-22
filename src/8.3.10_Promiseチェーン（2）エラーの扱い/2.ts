import { readFile } from 'fs/promises';

export const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

export const p = readFile('uhyo.txt', 'utf8')
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('エラーが発生しました!!!!', error);
  });
