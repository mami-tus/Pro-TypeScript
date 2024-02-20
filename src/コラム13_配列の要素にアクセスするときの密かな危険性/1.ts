// number[]型において何番目の要素でもnumber型のため、number型の変数に代入できてしまう
// undefinedの危険性があるため、インデックスアクセスは避けるべき
export const arr = [1, 10, 100];
export const num: number = arr[100];
console.log(num); // undefinedが表示される
