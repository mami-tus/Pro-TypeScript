let tuple: [string, number] = ['hoge', 10];
tuple = ['foo', -100];

export const str = tuple[0]; // strはstring型
export const num = tuple[1]; // numはnumber型
// error TS2493: Tuple type '[string, number]' of length '2' has no element at index '2'.
// export const nothing = tuple[2];

export const tuple2: readonly [string, number] = ['hoge', 10];
//  error TS2540: Cannot assign to '0' because it is a read-only property.
// tuple2[0] = 'foo';

export const tuple3: [string, number, string?] = ['hoge', 10, 'foo'];
export const foo = tuple3[2]; // fooはstring | undefined型
