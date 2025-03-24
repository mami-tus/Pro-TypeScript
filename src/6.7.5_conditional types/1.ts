export type RestArgs<M> = M extends 'string'
  ? [string, string]
  : [number, number, number];

export function func<M extends 'string' | 'number'>(
  mode: M,
  ...args: RestArgs<M>
) {
  console.log(mode, ...args);
}

// これらの呼び出しはOK
func('string', 'uhyo', 'hyo');
func('number', 1, 2, 3);

// コンパイルエラー
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// func('string', 1, 2);
// Expected 4 arguments, but got 3.ts(2554)
// func('number', 'uhyo', 'hyo');
