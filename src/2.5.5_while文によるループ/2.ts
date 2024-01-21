export let sum = 0;
export let i = 1;

while (true) {
  if (i > 100) {
    break;
  }
  sum += i;
  i++;
}

console.log(sum); // 5050
