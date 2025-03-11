export function useNever(value: never) {
  // never型はどんな型にも当てはめることができる
  const num: never = value;
  const str: never = value;
  const obj: never = value;
  console.log(`value is ${value}`);
}

// Argument of type '{}' is not assignable to parameter of type 'never'.ts(2345)
// useNever({})
// Argument of type '3.14' is not assignable to parameter of type 'never'.ts(2345)
// useNever(3.14);
