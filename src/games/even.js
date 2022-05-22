import { startGame, boolToAnswer } from '../index.js';
import { getRandomNum } from '../utils.js';

const GAMERULES = 'Answer "yes" if the number is even, otherwise answer "no"';

function isEven(num) {
  return num % 2 === 0;
}

function getQuestionAndCorrectAnswer() {
  const question = getRandomNum();
  const answer = boolToAnswer(isEven(question));

  return [question, answer];
}

export default function brainEven() {
  startGame(GAMERULES, getQuestionAndCorrectAnswer);
}
