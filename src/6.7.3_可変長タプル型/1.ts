export type NumberAndString = [number, ...string[]];

// OK
export const arr1: NumberAndString = [1, 'a', 'b', 'c']; // OK
export const arr2: NumberAndString = [1]; // OK

// NG
// export const arr3: NumberAndString = []; // NG
// export const arr4: NumberAndString = [1, 2]; // NG
// export const arr5: NumberAndString = ['a', 'b']; // NG
