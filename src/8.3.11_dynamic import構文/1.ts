import('fs/promises')
  .then(({ readFile }) => readFile('uhyo.txt', 'utf8'))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('uhyo.txtが見つかりませんでした', error);
  });
