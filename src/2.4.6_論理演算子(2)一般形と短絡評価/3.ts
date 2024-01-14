// 環境変数からSECRETを取得。なければ'default'を使う
// process.envが環境変数を表すオブジェクト
// 存在しないプロパティにアクセスするとundefinedが返る
export const secret = process.env.SECRET ?? 'default';

console.log(`secretは${secret}です`);

/**
 * x ?? yについてxがnullまたはundefinedならy、そうでなければxが返る
 */
