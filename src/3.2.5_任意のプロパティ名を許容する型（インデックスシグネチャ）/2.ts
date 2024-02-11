export type MyObj = { [key: string]: number };
const obj: MyObj = {
  foo: 123,
};
const num: number = obj.bar;
console.log(num);
