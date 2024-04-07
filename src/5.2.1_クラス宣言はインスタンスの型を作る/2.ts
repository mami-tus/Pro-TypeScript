export const User = class {
  name: string = '';
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }
};
// これはOK
export const uhyo = new User();
// error TS2749: 'User' refers to a value, but is being used as a type here. Did you mean 'typeof User'?
// export const john: User = new User();
