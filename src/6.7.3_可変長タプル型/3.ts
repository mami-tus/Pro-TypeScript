// ...配列型を2回使っているのでコンパイルエラー
// export type T1 = [number, ...string[], number, ...string[]];
// export type T2 = [number, ...string[], ...number[], string];

// オプショナルな要素を ...配列型 よりも後ろで使っているのでコンパイルエラー
// export type T3 = [number, ...string[], ...number[], string];
