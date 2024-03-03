export const map: Map<string, number> = new Map();
map.set('foo', 1234);

// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// map.set('foo', '1234');

console.log(map.get('foo')); // 1234
console.log(map.get('bar')); // undefined
console.log(map.has('foo')); // true
console.log(map.has('bar')); // false
console.log(map.delete('foo')); // true
console.log(map.delete('bar')); // false
console.log(map.has('foo')); // false
