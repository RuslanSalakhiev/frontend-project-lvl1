import { getRandomNum, getRandomOperator, startGame } from '../index.js';

function calculate(firstNum, secondNum, operator) {
  if (operator === '+') return parseInt(firstNum, 10) + parseInt(secondNum, 10);
  if (operator === '-') return parseInt(firstNum, 10) - parseInt(secondNum, 10);
  if (operator === '*') return parseInt(firstNum, 10) * parseInt(secondNum, 10);
  return 'error';
}

function getQuestionAnswerFunc() {
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
  const gameName = 'brainProgression';
  const gameRules = 'What number is missing in the progression?';
  const gameQuestioningFunc = getQuestionAnswerFunc;

  startGame(gameName, gameRules, gameQuestioningFunc);
}
