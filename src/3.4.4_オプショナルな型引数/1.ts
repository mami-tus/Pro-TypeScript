type Animal = {
  name: string;
};
type Family<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
// 通常どおりの使い方
type S = Family<string, string>;
// TはFamily<Animal, Animal>と同じ
type T = Family;
// UはFamily<string, Animal>と同じ
type U = Family<string>;
