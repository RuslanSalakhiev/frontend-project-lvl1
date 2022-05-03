const operations = ['+', '-', '*'];

export function getRandomNum(max = 10, min = 1) {
  return Math.round(Math.random() * (max - min)) + min;
}

export function isEven(num) {
  return num % 2 === 0;
}

export function getRandomOperator() {
  return operations[Math.floor(Math.random() * operations.length)];
}

export function calculate(firstNum, secondNum, operator) {
  if (operator === '+') return parseInt(firstNum, 10) + parseInt(secondNum, 10);
  if (operator === '-') return parseInt(firstNum, 10) - parseInt(secondNum, 10);
  if (operator === '*') return parseInt(firstNum, 10) * parseInt(secondNum, 10);
  return 'error';
}

export function getGCD(firstNum, secondNum) {
  let [min, max] = [firstNum, secondNum].sort();
  let mod;

  while (mod !== 0) {
    mod = max % min;
    max = min;
    min = mod;
  }

  return max;
}

export function isPrime(num) {
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
