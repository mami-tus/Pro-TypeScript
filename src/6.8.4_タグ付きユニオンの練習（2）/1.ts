export type Option<T> =
  | {
      tag: 'some';
      value: T;
    }
  | {
      tag: 'none';
    };

export function showNumberIfExists(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

export function isSome<T>(
  obj: Option<T>
): obj is Extract<Option<T>, { tag: 'some' }> {
  return obj.tag === 'some';
}
export function isSome2<T>(obj: Option<T>): obj is { tag: 'some'; value: T } {
  return obj.tag === 'some';
}

export type Some<T> = { tag: 'some'; value: T };
export type None = { tag: 'none' };
export type Option2<T> = Some<T> | None;

export function isSome3<T>(obj: Option2<T>): obj is Some<T> {
  return obj.tag === 'some';
}
