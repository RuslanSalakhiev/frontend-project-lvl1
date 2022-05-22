import { startGame } from '../index.js';
import { getRandomNum, getRandomOperator } from '../utils.js';

const GAMERULES = 'What number is missing in the progression?';

function calculate(firstNum, secondNum, operator) {
  if (operator === '+') return parseInt(firstNum, 10) + parseInt(secondNum, 10);
  if (operator === '-') return parseInt(firstNum, 10) - parseInt(secondNum, 10);
  if (operator === '*') return parseInt(firstNum, 10) * parseInt(secondNum, 10);
  return 'error';
}

function getQuestionAndCorrectAnswer() {
  let sequence = '';
  const seqOperator = getRandomOperator();
  const seqLength = getRandomNum(10, 5);
  const seqInitNum = getRandomNum();
  const hiddenNumIndex = getRandomNum(seqLength - 1);

  let hiddenValue;

  for (let i = 0; i < seqLength; i += 1) {
    let seqNum = calculate(seqInitNum, seqInitNum * i, seqOperator);
    if (hiddenNumIndex === i) {
      hiddenValue = seqNum;
      seqNum = '..';
    }
    sequence += `${seqNum} `;
  }

  return [sequence, hiddenValue];
}

export default function brainProgression() {
  startGame(GAMERULES, getQuestionAndCorrectAnswer);
}
