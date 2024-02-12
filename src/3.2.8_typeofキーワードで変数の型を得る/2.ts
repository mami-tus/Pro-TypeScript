export const obj = {
  foo: 123,
  bar: 'hi',
};

type T = typeof obj;
export const obj2: T = {
  foo: -50,
  bar: '',
};

// 型に別名をつけずにtypeofを使うこともできる
export const obj3: typeof obj = {
  foo: 0,
  bar: 'hello',
};
