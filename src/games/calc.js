import { startGame } from '../index.js';
import { getRandomNum, getRandomOperator } from '../utils.js';

const GAMERULES = 'What is the result of the expression?';

function calculate(firstNum, secondNum, operator) {
  switch (operator) {
    case '+': return firstNum + secondNum;
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    default: return 'error';
  }
}

function getQuestionAndCorrectAnswer() {
  const randNum1 = getRandomNum();
  const randNum2 = getRandomNum();
  const randOperator = getRandomOperator();

  const question = `${randNum1} ${randOperator} ${randNum2}`;
  const answer = calculate(randNum1, randNum2, randOperator);

  return [question, answer];
}

export default function brainCalc() {
  startGame(GAMERULES, getQuestionAndCorrectAnswer);
}
