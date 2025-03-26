export type Option<T> =
  | {
      tag: 'some';
      value: T;
    }
  | {
      tag: 'none';
    };

export function showNumberIfExists(obj: Option<number>): void {
  if (obj.tag === 'some') {
    console.log(obj.value);
  }
}

export const four: Option<number> = {
  tag: 'some',
  value: 4,
};

const nothing: Option<number> = {
  tag: 'none',
};

showNumberIfExists(four); // 4
showNumberIfExists(nothing); // 何も表示されない

export function showNumber(obj: Option<number>): void {
  // Property 'value' does not exist on type 'Option<number>'.
  // Property 'value' does not exist on type '{ tag: "none"; }'.
  // console.log(obj.value);
}

export type Option2<T> =
  | {
      hasValue: true;
      value: T;
    }
  | {
      hasValue: false;
    };
