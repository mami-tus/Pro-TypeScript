export const addResult = 1024 + 314 + 500;
console.log(addResult); // 1838
export const discounted = addResult * 0.7;
console.log(discounted); // 1286.6

export const sqrt2 = 2 ** 0.5;
console.log(sqrt2); // 1.4142135623730951
console.log(sqrt2 - 1); // 0.41421356237309515
//（0.4142135623730951にならないのはJavaScriptにおける浮動小数点数の計算における微小な誤差を反映）

console.log(18 / 12); // 1.5
console.log(18n / 12n); // 1n
console.log(18 % 12); // 6
console.log(18n % 12n); // 6n
