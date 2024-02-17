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
