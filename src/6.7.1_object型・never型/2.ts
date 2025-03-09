export function doNothing(val: unknown) {
  // 'val''は 'unknown' 型です。ts(18046)
  // const name = val.name;
  console.log(val);
}
