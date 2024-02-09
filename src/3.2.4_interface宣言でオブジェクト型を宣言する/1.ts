interface FooBarObj {
  foo: number;
  bar: string;
}
export const obj: FooBarObj = {
  foo: 0,
  bar: 'Hello, world!',
};
// interface宣言はtype文で代用可能なのでtype文のみ使う流儀もある
