export const sum3 = (a: number, b: number, c: number) => a + b + c;

export const nums = [1, 2, 3];
//  error TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
// console.log(sum3(...nums)); // numsの要素が3つ限らないためエラー

// 以下のように修正する
export const nums2: [number, number, number] = [1, 2, 3];
console.log(sum3(...nums2)); // 6
