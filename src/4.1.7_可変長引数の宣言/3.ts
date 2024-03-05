export const sum = (base: number, ...args: number[]): number => {
  let result = base * 1000;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum(1, 10, 100)); // 1110
console.log(sum(123, 456)); // 123456
// error TS2555: Expected at least 1 arguments, but got 0.
// console.log(sum());
