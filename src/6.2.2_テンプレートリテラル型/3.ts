function fromKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}

// userは"uhyo"型
export const user = fromKey('user:uhyo');
