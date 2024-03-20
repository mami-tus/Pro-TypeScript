export type MyFunc = {
  isUsed?: boolean;
  (arg: number): void;
};

export const double: MyFunc = (arg: number) => {
  console.log(arg * 2);
};

// doubleはisUsedプロパティを持つ
double.isUsed = true;
console.log(double.isUsed); // true

// doubleは関数として呼び出せる
double(1000);
