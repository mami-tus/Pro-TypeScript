function signNumber(type: 'plus' | 'minus') {
  return type === 'plus' ? 1 : -1;
}

console.log(signNumber('plus')); // 1
console.log(signNumber('minus')); // -1
// 型 '"uhyo"' の引数を型 '"plus" | "minus"' のパラメーターに割り当てることはできません。ts(2345)
// console.log(signNumber('uhyo'));
