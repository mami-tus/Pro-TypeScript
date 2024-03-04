function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

// OK
range(1, 5);
//  error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// range('5', '10');
// error TS2554: Expected 2 arguments, but got 1.
// range(5);
