export const propName: string = 'foo';
// objは { [x: string]: number }型
export const obj = {
  [propName]: 123,
};
console.log(obj.foo);
