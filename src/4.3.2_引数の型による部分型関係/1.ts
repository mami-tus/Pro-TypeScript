// HasNameAndAge が HasName の部分型
export type HasName = {
  name: string;
};
export type HasNameAndAge = {
  name: string;
  age: number;
};

export const showName = (obj: HasName) => {
  console.log(obj.name);
};
export const g: (obj: HasNameAndAge) => void = showName;

g({ name: 'uhyo', age: 26 }); // uhyo と表示
