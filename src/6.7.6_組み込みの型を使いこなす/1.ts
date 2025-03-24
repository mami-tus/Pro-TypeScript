/**
 * Tは
 * type T = {
    readonly name: string;
    readonly age: number;
    };
 */
export type T = Readonly<{
  name: string;
  age: number;
}>;
