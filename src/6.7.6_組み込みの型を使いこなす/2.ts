/**
 * T は
 * type T = {
    name?: string | undefined;
    age?: number | undefined;
    };
 */
export type T = Partial<{
  name: string;
  age: number;
}>;
