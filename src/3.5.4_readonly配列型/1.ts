// 内容を書き換えられない配列型になる
// ReadonlyArray<T> は readonly T[] と同じ
export const arr: readonly number[] = [0, 10, 100];

// error TS2542: Index signature in type 'readonly number[]' only permits reading.
// arr[1] = -500;
