import { readFile } from 'fs';

const startTime = performance.now();
readFile('foo.txt', 'utf8', (err, result) => {
  const endTime = performance.now();
  console.log(`${endTime - startTime}ミリ秒かかりました`);
});
