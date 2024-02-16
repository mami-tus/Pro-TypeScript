// 型引数Tを持つUser型
type User<T> = {
  name: string;
  child: T;
};
