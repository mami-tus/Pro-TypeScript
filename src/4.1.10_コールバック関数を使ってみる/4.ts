export type User = { name: string; age: number };
export const users: User[] = [
  { name: 'uhyo', age: 26 },
  { name: 'John Smith', age: 15 },
];

// 20歳以上のユーザーだけの配列
export const adultUsers = users.filter((user: User) => user.age >= 20);
console.log(adultUsers); // [{ name: 'uhyo', age: 26 }]

// 全てのユーザーが20歳以上ならtrue
export const allAdult = users.every((user: User) => user.age >= 20);
console.log(allAdult); // false

// 60歳以上のユーザーが1人でもいればtrue
export const seniorExists = users.some((user: User) => user.age >= 60);
console.log(seniorExists); // false

// 名前が 'John' から始まるユーザーを探して返す
export const john = users.find((user: User) => user.name.startsWith('John'));
