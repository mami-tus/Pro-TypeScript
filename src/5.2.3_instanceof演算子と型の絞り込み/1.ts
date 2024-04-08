export class User {
  name: string = '';
  age: number = 0;
}

export const uhyo = new User();
// uhyoはUserのインスタンスなのでtrue
console.log(uhyo instanceof User);
// {}はUserのインスタンスではないのでfalse
console.log({} instanceof User);

export const john: User = {
  name: 'John Smith',
  age: 15,
};
// johnはUserのインスタンスではないのでfalse
// User型だがUserのインスタンスはnewで作成されたもの
console.log(john instanceof User);
