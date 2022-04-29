const operations = ['+', '-', '*'];

export function getRandomNum() {
  return Math.round(Math.random() * 10);
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
