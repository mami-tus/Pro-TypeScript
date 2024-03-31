export const repeatLength = 5;
export const repeat = function <T>(element: T): T[] {
  // 異なるスコープに同じ名前の変数を宣言できる
  const repeatLength = 3;

  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }

  return result;
};

// 内側のスコープで宣言された変数が使われる
console.log(repeat('a')); // [ 'a', 'a', 'a' ]と表示
console.log(repeatLength); // 5と表示
