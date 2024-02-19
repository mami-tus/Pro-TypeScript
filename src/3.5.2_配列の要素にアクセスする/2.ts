export const arr = [0, 123, -456 * 100];
console.log(arr); // [ 0, 123, -45600 ]が表示される

arr[1] = 54000;
console.log(arr); // [ 0, 54000, -45600 ]が表示される
