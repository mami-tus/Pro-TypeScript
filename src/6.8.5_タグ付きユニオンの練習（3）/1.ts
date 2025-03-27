export type Option<T> =
  | {
      tag: 'some';
      value: T;
    }
  | {
      tag: 'none';
    };

export function doubleOption(obj: Option<number>): Option<number> {
  return mapOption(obj, (x) => x * 2);
}

export function mapOption<T, U>(
  obj: Option<T>,
  callback: (value: T) => U
): Option<U> {
  switch (obj.tag) {
    case 'some':
      return {
        tag: 'some',
        value: callback(obj.value),
      };
    case 'none':
      return {
        tag: 'none',
      };
  }
}

const four: Option<number> = {
  tag: 'some',
  value: 4,
};
const nothing: Option<number> = {
  tag: 'none',
};

console.log(doubleOption(four)); // { tag: 'some', value: 8 }
console.log(doubleOption(nothing)); // { tag: 'none' }
