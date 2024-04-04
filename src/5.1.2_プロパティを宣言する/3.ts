export class User {
  readonly name: string = '';
  age: number = 0;
}

export const uhyo = new User();
//  error TS2540: Cannot assign to 'name' because it is a read-only property.
// uhyo.name = 'うひょ';
