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

  // noImplicitOverrideフラグが有効な場合、override修飾子を付ける必要がある
  //  error TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'User'.
  public isAdult(): boolean {
    return true;
  }
}
