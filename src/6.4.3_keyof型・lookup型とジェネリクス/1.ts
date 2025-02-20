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
