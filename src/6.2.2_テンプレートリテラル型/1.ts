// function getHelloStr(): `Hello, ${string}!` {
//   const rand = Math.random();
//   if (rand < 0.3) {
//     return 'Hello, world!';
//   } else if (rand < 0.6) {
//     return 'Hello, my world!';
//   } else if (rand < 0.9) {
//     // 型 '"Hello,  world."' を型 '`Hello, ${string}!`' に割り当てることはできません。ts(2322)
//     return 'Hello,  world.';
//   } else {
//     // 型 '"Hell, world!"' を型 '`Hello, ${string}!`' に割り当てることはできません。ts(2322)
//     return 'Hell, world!';
//   }
// }
