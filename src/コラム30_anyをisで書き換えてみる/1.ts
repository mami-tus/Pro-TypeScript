export type Human = {
  type: 'Human';
  age: number;
  name: string;
};

export function isHuman(value: any): value is Human {
  // プロパティアクセスできない可能性を排除
  if (value == null) return false;
  // 3つのプロパティの型を判定
  return (
    value.type === 'Human' &&
    typeof value.age === 'number' &&
    typeof value.name === 'string'
  );
}

// anyを使わず書き換える
export function isPropertyAccessible(
  value: unknown
): value is { [key: string]: unknown } {
  return value != null;
}

export function isHuman2(value: unknown): value is Human {
  // プロパティアクセスできない可能性を排除
  if (!isPropertyAccessible(value)) return false;
  // 3つのプロパティの型を判定
  return (
    value.type === 'Human' &&
    typeof value.age === 'number' &&
    typeof value.name === 'string'
  );
}
