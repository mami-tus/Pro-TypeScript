export const date = new Date('2020-02-03T15:00:00+09:00');
const timeNum = date.getTime();
console.log(timeNum); // 1580709600000

export const date2 = new Date(timeNum);
console.log(date2); // 2020-02-03T06:00:00.000Z
// TODO: ↑がなぜUTCになるのか調べる
