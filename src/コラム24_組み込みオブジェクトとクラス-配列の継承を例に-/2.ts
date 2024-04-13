export class RepeatArray<T> extends Array<T> {
  repeat(times: number): RepeatArray<T> {
    const result = new RepeatArray<T>();
    for (let i = 0; i < times; i++) {
      result.push(...this);
    }
    return result;
  }
}

// [1, 2] に相当するRepeatArrayを作成
export const arr = new RepeatArray<number>(1, 2);
// pushで [1, 2, 3] にする
arr.push(3);
// arr.repeat(3) は [1, 2, 3, 1, 2, 3, 1, 2, 3] に相当するRepeatArray
export const repeated = arr.repeat(3);

// RepeatArray(9) [1, 2, 3, 1, 2, 3, 1, 2, 3] と表示される
console.log(repeated);
// [ <10 empty items> ] 長さが10の空の配列と表示される
console.log(new Array(10));
// [ 10 ] 長さが1で要素が10の配列と表示される
console.log(Array.of(10));
