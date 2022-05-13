import { startGame, getRandomNum } from '../index.js';

function getGCD(firstNum, secondNum) {
  let [min, max] = [firstNum, secondNum].sort();
  let mod;

  while (mod !== 0) {
    mod = max % min;
    max = min;
    min = mod;
  }

  return max;
}

function getQuestionAnswerFunc() {
  const randNum1 = getRandomNum();
  const randNum2 = getRandomNum();

  const question = `${randNum1} ${randNum2}`;
  const answer = getGCD(randNum1, randNum2);

  return [question, answer];
}

export default function brainGCD() {
  const gameName = 'brainGCD';
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const gameQuestioningFunc = getQuestionAnswerFunc;

  startGame(gameName, gameRules, gameQuestioningFunc);
}
