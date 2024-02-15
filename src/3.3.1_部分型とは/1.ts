type FooBar = {
  foo: string;
  bar: number;
};

type FoobarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

export const obj: FoobarBaz = {
  foo: 'hi',
  bar: 1,
  baz: false,
};
// FooBarBazがFooBarの部分型であるためエラーにならない
export const obj2: FooBar = obj;
