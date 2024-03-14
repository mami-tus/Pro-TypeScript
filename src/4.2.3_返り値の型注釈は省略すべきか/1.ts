export function range(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

const arr = range(5, 10);
// ループ内の処理が一行だけの場合は、ブロックを省略できる
for (const value of arr) console.log(value);
