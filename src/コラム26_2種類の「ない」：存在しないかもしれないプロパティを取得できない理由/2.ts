export type Animal = {
  species: string;
};

export const cat = {
  species: 'Felis silvestris catus',
  age: '永遠の17歳',
};
// Animal型のオブジェクトがageプロパティが「実際にない」とは限らない
export const animal: Animal = cat;
// プロパティアクセスはコンパイルエラー
// error TS2339: Property 'age' does not exist on type 'Animal'.
// console.log(animal.age);
