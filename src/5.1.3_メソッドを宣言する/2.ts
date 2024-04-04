export class User {
  name: string = '';
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }
}

// Userのインスタンスを2つ作成
export const uhyo = new User();
export const baby = new User();

uhyo.age = 26;

console.log(uhyo.isAdult()); // true が表示される
console.log(baby.isAdult()); // false が表示される
