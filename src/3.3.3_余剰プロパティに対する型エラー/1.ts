export type User = { name: string; age: number };
// error TS2353: Object literal may only specify known properties, and 'telNumber' does not exist in type 'User'.
// const u: User = { name: 'uhyo', age: 26, telNumber: '000-0000-0000' };
