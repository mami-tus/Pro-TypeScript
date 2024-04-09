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
  rank: number = 1;

  // ここでisAdultを再宣言
  // public isAdult(): boolean {
  //   return true;
  // }

  // 上記は以下のようにも書ける
  public override isAdult(): boolean {
    return true;
  }
}
