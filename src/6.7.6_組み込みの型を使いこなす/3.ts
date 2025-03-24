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
