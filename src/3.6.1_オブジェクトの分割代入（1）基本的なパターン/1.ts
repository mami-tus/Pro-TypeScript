export const obj = {
  foo: 'foo',
  bar: 'bar',
};
// objのfooプロパティを変数fooに、barプロパティを変数barに代入
export const { foo, bar } = obj;
// 以下と同じ意味
// export const foo = obj.foo;
// export const bar = obj.bar;
