export function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  // error TS2322: Type 'number' is not assignable to type 'number[]'.
  // return max;
  return result;
}
