import { startGame, getRandomNum, getRandomOperator } from '../index.js';

function calculate(firstNum, secondNum, operator) {
  if (operator === '+') return parseInt(firstNum, 10) + parseInt(secondNum, 10);
  if (operator === '-') return parseInt(firstNum, 10) - parseInt(secondNum, 10);
  if (operator === '*') return parseInt(firstNum, 10) * parseInt(secondNum, 10);
  return 'error';
}

function getQuestionAnswerFunc() {
  const randNum1 = getRandomNum();
  const randNum2 = getRandomNum();
  const randOperator = getRandomOperator();

  const question = `${randNum1} ${randOperator} ${randNum2}`;
  const answer = calculate(randNum1, randNum2, randOperator);

  return [question, answer];
}

export default function brainCalc() {
  const gameName = 'brainCalc';
  const gameRules = 'What is the result of the expression?';
  const gameQuestioningFunc = getQuestionAnswerFunc;
  startGame(gameName, gameRules, gameQuestioningFunc);
}
