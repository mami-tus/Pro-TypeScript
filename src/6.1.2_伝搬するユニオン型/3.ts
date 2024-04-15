export type MaybeFunc = ((str: string) => string) | string;

// error TS2349: This expression is not callable.
// Not all constituents of type 'MaybeFunc' are callable.
// Type 'string' has no call signatures.
export function useFunc(func: MaybeFunc) {
  // const result = func('uhyo');
}
