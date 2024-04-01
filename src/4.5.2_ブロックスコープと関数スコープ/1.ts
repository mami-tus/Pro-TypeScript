export function sabayomi(age: number) {
  if (age >= 20) {
    const lie = age - 5;
    return lie;
  }
  // error TS2304: Cannot find name 'lie'.
  // console.log(lie);
  return age;
}
