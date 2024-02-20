let tuple: [string, number] = ['hoge', 10];
tuple = ['foo', -100];

export const str = tuple[0]; // strはstring型
export const num = tuple[1]; // numはnumber型
// error TS2493: Tuple type '[string, number]' of length '2' has no element at index '2'.
// export const nothing = tuple[2];
