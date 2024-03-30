export function repeat<T>(element: T, length: number): T[] {
  return Array.from({ length }, () => element);
}

// 型推論により、resultはstring[]型となる
// repeat<string>('a', 5)と同じ
export const result = repeat('a', 5);
