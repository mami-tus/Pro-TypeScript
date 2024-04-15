export type MysteryFunc = ((str: string) => string) | ((str: string) => number);

export function useFunc(func: MysteryFunc) {
  const result = func('uhyo'); // string | number 型
  console.log(result);
}

useFunc((str: string) => str.length); // 4
useFunc((str: string) => str); // uhyo
