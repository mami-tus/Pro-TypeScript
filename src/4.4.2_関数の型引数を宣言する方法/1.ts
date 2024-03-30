// 型引数を宣言する方法
// function関数式の場合
export const repeat1 = function <T>(element: T, length: number): T[] {
  return Array.from({ length }, () => element);
};

// アロー関数式の場合
export const repeat2 = <T>(element: T, length: number): T[] => {
  return Array.from({ length }, () => element);
};

// メソッド記法の場合
export const utils = {
  repeat3<T>(element: T, length: number): T[] {
    return Array.from({ length }, () => element);
  },
};
