export type HasAge = {
  age: number;
};

export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge) {
  if (customer instanceof User) {
    if (customer.name === 'uhyo') {
      return 0;
    }
  }
  // &&で書くこともできる
  // if (customer instanceof User && customer.name === 'uhyo') {
  //   return 0;
  // }
  return customer.age < 18 ? 1000 : 1800;
}

export const customer1: HasAge = { age: 15 };
export const customer2: HasAge = { age: 40 };
export const uhyo = new User('uhyo', 26);

console.log(getPrice(customer1)); // 1000 と表示される
console.log(getPrice(customer2)); // 1800 と表示される
console.log(getPrice(uhyo)); // 0 と表示される
