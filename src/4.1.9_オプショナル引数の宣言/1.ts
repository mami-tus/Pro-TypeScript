export const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    // upper は boolean | undefined 型
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper('Hello')); // hello
console.log(toLowerOrUpper('Hello', false)); // hello
console.log(toLowerOrUpper('Hello', true)); // HELLO
// undefined も渡すことができる
console.log(toLowerOrUpper('Hello', undefined)); // hello
