// fooに再代入されてるため、constではなくletを使う
let foo = 10;
// ++foo;でも同じ結果になる
foo++;
console.log(foo); // 11
--foo;
console.log(foo); // 10
