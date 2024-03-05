export const uhyo: Human = {
  height: 1.84,
  weight: 72,
};
// error TS2448: Block-scoped variable 'calcBMI' used before its declaration.
// console.log(calcBMI(uhyo));

export type Human = {
  height: number;
  weight: number;
};

export const calcBMI = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};
