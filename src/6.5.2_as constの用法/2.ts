export const names = ['uhyo', 'john', 'Taro'] as const;
// type Name = 'uhyo' | 'john' | 'Taro'
export type Name = (typeof names)[number];

// 先に型を定義で同じことができる
export type Name2 = 'uhyo' | 'john' | 'Taro';
export const names2: Name2[] = ['uhyo', 'john', 'Taro'];
