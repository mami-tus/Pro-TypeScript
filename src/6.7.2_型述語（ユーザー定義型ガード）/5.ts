export type Human = {
  type: 'Human';
  name: string;
  age: number;
};

export function assertHuman(value: any): asserts value is Human {
  // プロパティアクセスできない可能性を排除
  if (value == null) {
    throw new Error('value is null or undefined');
  }
  // 3つのプロパティの型を判定
  if (
    value.type !== 'Human' ||
    typeof value.name !== 'string' ||
    typeof value.age !== 'number'
  ) {
    throw new Error('value does not match Human type');
  }
}
export function checkAndUseHuman(value: unknown) {
  assertHuman(value);
  // valueはHuman型なので、nameとageプロパティにアクセスできるå
  const name = value.name;
}
