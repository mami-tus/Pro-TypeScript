export type User = { name: string };
export type ReadonlyUser = { readonly name: string };

export const uhyoify = (user: User) => {
  user.name = 'uhyo';
};

export const john: ReadonlyUser = { name: 'John Smith' };
// これはコンパイルエラー（john.nameはreadonlyなので）
// error TS2540: Cannot assign to 'name' because it is a read-only property.
// john.name = 'Nanashi';

// これはエラーにならない！
uhyoify(john);

// readonlyなのにnameが変更されてしまう
console.log(john.name); // uhyo
