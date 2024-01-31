export const foo = { obj: { num: 1234 } };
const bar = { ...foo };
bar.obj.num = 0;
console.log(foo.obj.num); // 0
// プロパティの中にオブジェクトが入っている場合同じオブジェクトのまま
