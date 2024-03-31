export const repeat = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  // error TS2451: Cannot redeclare block-scoped variable 'result'.
  // const result = [];
  return result;
};
