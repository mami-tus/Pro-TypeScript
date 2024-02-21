export const arr = [
  {
    name: 'John',
    age: 20,
  },
];
// arr[0]のnameプロパティを変数nameに代入
export const [{ name }] = arr;
console.log(name); // John
