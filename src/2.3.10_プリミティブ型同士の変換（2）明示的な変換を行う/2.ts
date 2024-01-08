export const num1 = Number(true);
console.log(num1); // 1 と表示される

export const num2 = Number(false);
console.log(num2); // 0 と表示される

export const num3 = Number(null);
console.log(num3); // 0 と表示される

export const num4 = Number(undefined);
console.log(num4); // NaN と表示される
