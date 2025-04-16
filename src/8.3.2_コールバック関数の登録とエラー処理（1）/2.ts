import { readFile } from 'fs/promises';

const p = readFile('uhyo1.txt', 'utf8');

p.then((result) => {
  console.log('成功', result);
});
p.catch((err) => {
  console.error('失敗', err);
});

/**
 * 失敗 [Error: ENOENT: no such file or directory, open 'uhyo1.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'uhyo1.txt'
}
node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise
[Error: ENOENT: no such file or directory, open 'uhyo1.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'uhyo1.txt'
}

*/
