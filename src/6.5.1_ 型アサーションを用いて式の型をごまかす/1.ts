export function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}

console.log(getFirstFiveLetters('uhyohyohyo')); // uhyoh
console.log(getFirstFiveLetters(123)); // ランタイムエラー
