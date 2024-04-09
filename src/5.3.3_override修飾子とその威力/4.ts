export class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isChild(): boolean {
    return this.#age < 20;
  }
}

export class PremiumUser extends User {
  rank: number = 1;

  // オーバーライドのつもりだったが、オーバーライドではなくなってしまった！
  // error TS4113: This member cannot have an 'override' modifier because it is not declared in the base class 'User'.
  // public override isAdult(): boolean {
  //   return true;
  // }
}
