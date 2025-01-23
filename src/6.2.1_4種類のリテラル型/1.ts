// これは’foo’という文字列のみが属するリテラル型
type FooString = 'foo';

// これはOK
export const foo: FooString = 'foo';

// 型 '"bar"' を型 '"foo"' に割り当てることはできません。ts(2322)
// export const bar: FooString = 'bar';
