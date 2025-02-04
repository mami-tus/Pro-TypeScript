export type SignType = 'plus' | 'minus';
export function signNumber(type: SignType) {
  return type === 'plus' ? 1 : -1;
}

export function numberWithSign(num: number, type: SignType | 'none') {
  if (type === 'none') {
    // ここではtypeは"none"型
    return 0;
  } else {
    // ここではtypeは"SignType"型
    return num * signNumber(type);
  }
}

console.log(numberWithSign(5, 'plus')); // 5
console.log(numberWithSign(5, 'minus')); // -5
console.log(numberWithSign(5, 'none')); // 0
