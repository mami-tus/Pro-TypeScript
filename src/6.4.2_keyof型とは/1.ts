export type Human = {
  name: string;
  age: number;
};

export type HumanKeys = keyof Human;

let key: HumanKeys = 'name';
key = 'age';
// 型 '"hoge"' を型 'keyof Human' に割り当てることはできません。
// key = 'hoge';
