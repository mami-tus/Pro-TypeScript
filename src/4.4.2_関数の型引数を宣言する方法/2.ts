export const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
  left,
  right,
];
// pは[string, number]型
export const p = pair<string, number>('uhyo', 26);
