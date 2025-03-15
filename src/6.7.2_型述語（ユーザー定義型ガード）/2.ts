export function isStringOrNumber(value: unknown): boolean {
  return typeof value === 'string' || typeof value === 'number';
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  // 'something' is of type 'unknown'.ts(18046)
  // console.log(something.toString());
}
//https://zenn.dev/ubie_dev/articles/ts-infer-type-predicates
