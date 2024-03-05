export type Human = {
  height: number;
  weight: number;
};

export const calcBMI = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};

export const uhyo: Human = {
  height: 1.84,
  weight: 72,
};
console.log(calcBMI(uhyo)); // 21.266540642722116
