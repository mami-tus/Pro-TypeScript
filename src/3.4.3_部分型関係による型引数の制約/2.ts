export type HasName = {
  name: string;
};
export type Family<Parent extends HasName, Child extends Parent> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

export type Animal = {
  name: string;
};
export type Human = {
  name: string;
  age: number;
};

// これはOK
export type S = Family<Animal, Human>;
// AnimalはHumanの部分型ではないのでエラー
// export type T = Family<Human, Animal>;
