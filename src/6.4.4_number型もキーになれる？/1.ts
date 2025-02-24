export type Obj = {
  0: string;
  1: number;
};

export const obj: Obj = {
  0: 'uhyo',
  '1': 26,
};

obj['0'] = 'john';
obj[1] = 15;

// ObjKeysは0 | 1型
export type ObjKeys = keyof Obj;

export function get<T, K extends keyof T & string>(obj: T, key: K): T[K] {
  // 型 'string | number | symbol' を型 'string' に割り当てることはできません。
  // 型 'number' を型 'string' に割り当てることはできません。ts(2322)
  const keyName: string = key;
  return obj[key];
}
