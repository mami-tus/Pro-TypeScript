export const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  console.log(upper);
  if (upper) {
    // upper は boolean 型（デフォルト引数により undefined の可能性がなくなる）
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper('Hello')); // hello
console.log(toLowerOrUpper('Hello', false)); // hello
console.log(toLowerOrUpper('Hello', true)); // HELLO
// undefined も渡すことができる（関数内部でデフォルト値になる）
console.log(toLowerOrUpper('Hello', undefined)); // hello
