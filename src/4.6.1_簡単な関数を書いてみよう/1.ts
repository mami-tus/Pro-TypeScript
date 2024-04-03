function getFizzBuzzString(num: number) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

// アロー関数の場合
// export const getFizzBuzzString = (num: number) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'FizzBuzz';
//   } else if (num % 3 === 0) {
//     return 'Fizz';
//   } else if (num % 5 === 0) {
//     return 'Buzz';
//   } else {
//     return num;
//   }
// };

export function sequence(start: number, end: number) {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// アロー関数の場合
// export const sequence = (from: number, to: number) => {
//   let result: number[] = [];
//   for (let i = from; i <= to; i++) {
//     result.push(i);
//   }
//   return result;
// };

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
