// 文字列はlengthプロパティを持つため、HasLength型の変数に文字列を代入できる
type HasLength = { length: number };
export const obj: HasLength = 'foobar';
