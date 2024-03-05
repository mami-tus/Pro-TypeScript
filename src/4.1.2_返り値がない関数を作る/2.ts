export function helloWorldTimes(n: number): void {
  if (n >= 100) {
    console.log(`${n}回なんて無理です！！！`);
    return;
  }
  for (let i = 0; i < n; i++) {
    console.log('Hello, world!');
  }
}

helloWorldTimes(5);
helloWorldTimes(150);
