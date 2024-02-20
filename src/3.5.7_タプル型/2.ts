// ラベル付きタプル型
// タプル型の要素に名前をつけることができる
export type User = [name: string, age: number];

export const uhyo: User = ['uhyo', 26];

console.log(uhyo[0]); // uhyo
console.log(uhyo[1]); // 26
