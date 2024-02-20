export const obj = {
  foo: 'foo',
  bar: 'bar',
  'foo bar': 'foo bar',
};
export const { foo, bar: barVar, 'foo bar': fooBar } = obj;
console.log(foo); // foo
console.log(barVar); // bar
console.log(fooBar); // foo bar
