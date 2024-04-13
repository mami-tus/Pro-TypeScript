export class A {
  foo = 123;
  bar = this.foo + 100;
  getFoo() {
    return this.foo;
  }
}

export const obj = new A();
console.log(obj.bar, obj.getFoo()); // 223 123
