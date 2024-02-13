export const commandList = ['attack', 'defend', 'run'] as const;

// 'attack' | 'defend' | 'run' 型
type CommandType = (typeof commandList)[number];

// 型が最上位の書き方にすると同じ文字列を2回書かなければならない
// type Command = 'attack' | 'defend' | 'run';
// export const commandList: Command[] = ['attack', 'defend', 'run'];
