export const t = true,
  f = false;

console.log(t && t); // true
console.log(t && f); // false
console.log(f && f); // false

console.log(t || t); // true
console.log(t || f); // true
console.log(f || f); // false
