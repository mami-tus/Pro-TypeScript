export class User1 {
  private age = 0;
}
// error TS2415: Class 'SuperUser1' incorrectly extends base class 'User1'.
// Types have separate declarations of a private property 'age'.
// export class SuperUser1 extends User1 {
//   private age = 1;
// }

export class User2 {
  #age = 0;
}
export class SuperUser2 extends User2 {
  // これはOK
  #age = 1;
}
