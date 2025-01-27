function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

export const uhyoKey: 'user:uhyo' = makeKey('uhyo');
