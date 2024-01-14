//  OR 演算（|）
// 二つの数値の各ビットを比較し、少なくとも一方が1の場合に1を返します。
console.log(0b0101 | 0b1100); // 13 (0b1101)
// AND 演算（&）
// 二つの数値の各ビットを比較し、両方が1の場合にのみ1を返します。
console.log(0b0101 & 0b1100); // 4 (0b0100)
// NOT 演算（~）
// 数値の各ビットを反転します。つまり、1は0に、0は1に変わります。
console.log(~0b0101); // -6 (0b11111111111111111111111111111010)
