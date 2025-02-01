function signNumber(type: 'plus' | 'minus') {
  return type === 'plus' ? 1 : -1;
}
function useNumber(num: number) {
  return num > 0 ? 'plus' : num < 0 ? 'minus' : 'zero';
}

// 型 '"uhyo"' の引数を型 '"plus" | "minus"' のパラメーターに割り当てることはできません。
// signNumber('uhyo');

// 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
// useNumber('uhyo');
