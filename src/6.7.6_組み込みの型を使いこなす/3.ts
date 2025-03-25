/**
 * T は
 * type T = {
 *   age: number;
 * };
 */
export type T = Pick<
  {
    name: string;
    age: number;
  },
  'age'
>;

/**
 * T1 は
 * type T1 = {
 *   age: number;
 * };
 */
export type T2 = Omit<
  {
    name: string;
    age: number;
  },
  'name'
>;
