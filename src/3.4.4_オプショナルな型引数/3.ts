export type HasName = {
  name: string;
};
export type Animal = {
  name: string;
};
export type Family<Parent extends HasName, Child extends HasName = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
