export type NestedObj = { obj?: { foo: number } };
export const nested1: NestedObj = {
  obj: {
    foo: 123,
  },
};
export const nested2: NestedObj = {};
// 変数foo1には123が代入される
export const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// 変数foo2には500が代入される
export const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
console.log(foo1); // 123;
console.log(foo2); // 500;
