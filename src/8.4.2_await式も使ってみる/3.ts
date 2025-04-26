async function fail() {
  throw new Error('An error occurred');
}

export const p = fail();
p.catch((error) => {
  console.log('失敗', error);
});
