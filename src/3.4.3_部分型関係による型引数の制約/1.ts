export type HasName = {
  name: string;
};
export type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
// error TS2344: Type 'number' does not satisfy the constraint 'HasName'.
// export type T = Family<number, string>;

// HumanやAnimalはHasNameの部分型なのでエラーにならない
export type Animal = {
  name: string;
};
export type Human = {
  name: string;
  age: number;
};

type T = Family<Animal, Human>;
