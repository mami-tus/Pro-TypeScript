type Obj = { foo?: number };
export const obj1: Obj = {};
// fooの型はnumber型
export const { foo = 500 } = obj1;
