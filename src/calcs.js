const operations = ['+', '-', '*'];

export function getRandomNum(max = 10, min = 1) {
  return Math.round(Math.random() * (max - min)) + min;
}

export function isEven(questionNum) {
  return questionNum % 2 === 0 ? 'yes' : 'no';
}

export function getRandomOperator() {
  return operations[Math.floor(Math.random() * operations.length)];
}

export function calculate(firstVal, secondVal, operator) {
  if (operator === '+') return parseInt(firstVal, 10) + parseInt(secondVal, 10);
  if (operator === '-') return parseInt(firstVal, 10) - parseInt(secondVal, 10);
  if (operator === '*') return parseInt(firstVal, 10) * parseInt(secondVal, 10);
  return 'error';
}

export function getGCD(firstVal, secondVal) {
  let [min, max] = [firstVal, secondVal].sort();
  let mod;

  while (mod !== 0) {
    mod = max % min;
    max = min;
    min = mod;
  }

  return max;
}
