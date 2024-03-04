export type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

export const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = data
  .trim()
  .split('\n')
  .map((line) => {
    const [name, ageString, premiumUserString] = line.split(',');
    return {
      name,
      age: Number(ageString),
      premiumUser: premiumUserString === '1',
    };
  });
for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
  }
}
