export type NumberStringNumber = [number, ...string[], number];

// OK
const arr1: NumberStringNumber = [1, '2', '3', 4];
const arr2: NumberStringNumber = [1, 2];

// NG
// const arr3: NumberStringNumber = [1, '2', '3'];
// const arr4: NumberStringNumber = [];
// const arr5: NumberStringNumber = ['1', '2', 3];
// const arr6: NumberStringNumber = [1, '2', 3, '4'];
