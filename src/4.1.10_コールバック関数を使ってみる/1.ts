export type User = { name: string; age: number };
export const getName = (u: User): string => u.name;
export const users: User[] = [
  { name: 'uhyo', age: 26 },
  { name: 'John Smith', age: 15 },
];

// 渡されたコールバック関数を配列の各要素に適用した結果からなる新しい配列を返す
export const names = users.map(getName);
console.log(names); // ['uhyo', 'John Smith']
