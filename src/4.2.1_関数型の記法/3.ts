export type F2 = (arg: string, arg2: string) => boolean;
// error TS2322: Type '(num: number) => void' is not assignable to type 'F2'.
// export const fun: F2 = (num: number): void => console.log(num);
