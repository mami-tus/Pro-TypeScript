export type Human = {
  name: string;
  age?: number;
};

export const john: Human = {
  name: 'John Smith',
  // exactOptionalPropertyTypes が有効の場合以下のコンパイルエラーが発生
  //  プロパティ 'age' の型に互換性がありません。型 'undefined' を型 'number' に割り当てることはできません。ts(2375)
  age: undefined,
};
