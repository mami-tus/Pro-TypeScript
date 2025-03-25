export type Union = 'uhyo' | 'hyo' | 1 | 2 | 3;
// T は 'uhyo' | 'hyo'
export type T = Extract<Union, string>;
// U は 1 | 2 | 3
export type U = Exclude<Union, string>;
