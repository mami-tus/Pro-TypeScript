// ランタイムエラー（コンパイルは成功してしまう）: SyntaxError: Cannot convert fooooooo to a BigInt
export const bigint = BigInt('fooooooo');

console.log('bigint is', bigint);
