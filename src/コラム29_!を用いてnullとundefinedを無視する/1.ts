export type Human = {
  name: string;
  age: number;
};

export function getOneUserName(
  user1?: Human,
  user2?: Human
): string | undefined {
  if (user1 === undefined && user2 === undefined) {
    return undefined;
  }
  // 上のif文の後はuser1またはuser2の少なくとも一方はundefinedではない
  if (user1 !== undefined) {
    return user1.name;
  }
  // user2が非undefinedであるはずだが、TypeScriptはこの事実を認識できない
  // 'user2' は 'undefined' の可能性があります。ts(18048)
  // !を使うことで、user2がundefinedの可能性を型から消す（だけでundefinedの可能性はある）
  return (user2 as Human).name;
  // asで代替可能
  // return (user2 as Human).name;
}

// 以下のように!やas使わずに書くこともできる
export function getOneUserName2(
  user1?: Human,
  user2?: Human
): string | undefined {
  // user1やuser2がundefinedの場合user1?.nameやuser2?.nameはundefinedになる
  // ??は左辺がnullまたはundefinedの場合に右辺を返す
  return user1?.name ?? user2?.name;
}
