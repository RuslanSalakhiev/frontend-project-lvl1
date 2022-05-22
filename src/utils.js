export function getRandomOperator() {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
}

export function getRandomNum(max = 10, min = 1) {
  return Math.round(Math.random() * (max - min)) + min;
}
