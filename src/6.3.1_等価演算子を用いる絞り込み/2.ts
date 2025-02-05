export type SignType = 'plus' | 'minus';
export function signNumber(type: SignType) {
  return type === 'plus' ? 1 : -1;
}

export function numberWithSign2(num: number, type: SignType | 'none') {
  if (type === 'none') {
    // ここではtypeは"none"型
    return 0;
  }

  // ここではtypeは"SignType"型
  return num * signNumber(type);
}

export function numberWithSign3(num: number, type: SignType | 'none') {
  return type === 'none' ? 0 : num * signNumber(type);
}

console.log(numberWithSign2(5, 'minus')); // -5
console.log(numberWithSign3(3, 'plus')); // 3
