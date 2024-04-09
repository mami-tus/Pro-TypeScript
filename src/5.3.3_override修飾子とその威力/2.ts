export class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

export class PremiumUser extends User {
  //  error TS4113: This member cannot have an 'override' modifier because it is not declared in the base class 'User'.
  // override rank: number = 1;

  // 上記は以下のようにも書ける
  public override isAdult(): boolean {
    return true;
  }
}
