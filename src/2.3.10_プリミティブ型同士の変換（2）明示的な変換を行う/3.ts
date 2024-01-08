export const bigint1 = BigInt('1234');
console.log(bigint1); // 1234n と表示される

export const bigint2 = BigInt(500);
console.log(bigint2); // 500n と表示される

export const bigint3 = BigInt(true);
console.log(bigint3); // 1n と表示される
