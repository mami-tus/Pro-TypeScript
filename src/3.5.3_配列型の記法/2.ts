// 簡単な型の配列で T[] を使う
export const arr1: boolean[] = [false, true];
// 簡単な型の配列で Array<T> を使う
const arr2: Array<{ name: string }> = [
  { name: '山田さん' },
  { name: '田中さん' },
  { name: '鈴木さん' },
];
// T[] と Array<T> は意味は同じ
