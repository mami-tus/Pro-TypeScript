// HasNameAndAge が HasName の部分型
export type HasName = {
  name: string;
};
export type HasNameAndAge = {
  name: string;
  age: number;
};

export const fromAge = (age: number): HasNameAndAge => ({
  name: 'John Smith',
  age,
});

export const f: (age: number) => HasName = fromAge;
export const obj: HasName = f(100);
