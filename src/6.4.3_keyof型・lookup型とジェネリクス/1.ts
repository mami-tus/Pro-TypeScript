// K extends keyof T> がないとT[K]というlookup型が正しいかわからずコンパイルエラーになる
export function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export type Human = {
  name: string;
  age: number;
};

export const uhyo: Human = {
  name: 'uhyo',
  age: 26,
};

// uhyoNameはstring型
export const uhyoName = get(uhyo, 'name');
// uhyoAgeはnumber型
export const uhyoAge = get(uhyo, 'age');
// 型 '"gender"' の引数を型 'keyof Human' のパラメーターに割り当てることはできません。ts(2345)
// export const uhyoGender = get(uhyo, 'gender');
