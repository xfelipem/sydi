export function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(100000000);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
