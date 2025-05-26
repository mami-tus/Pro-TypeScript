export async function main() {
  const { readFile, writeFile } = await import('fs/promises');

  try {
    const fooContent = await readFile('foo.txt', 'utf8');
    // 2倍にしてbar.txtに書き込む
    await writeFile('uhyo.txt', fooContent + fooContent);
    console.log('書き込み完了しました');
  } catch (error) {
    console.error('失敗しました', error);
  }
}

main().then(() => {
  console.log('mainが完了しました');
});
