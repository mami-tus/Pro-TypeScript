// toStringを持つ値の型
export type HasToString = {
  toString: () => string;
};

export function useToString2(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

// "value is foo!"と表示される
useToString2({
  toString() {
    return 'foo!';
  },
});

/**
 * Argument of type 'number' is not assignable to parameter of type 'HasToString & object'.
  Type 'number' is not assignable to type 'object'.ts(2345)
 */
// useToString2(3.14);
