export class A {
  foo = 123;
  bar = this.foo + 100;
}

export const obj = new A();
console.log(obj.bar); // 223
