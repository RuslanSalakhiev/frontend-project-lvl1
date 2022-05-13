import { startGame, getRandomNum, boolToAnswer } from '../index.js';

function isEven(num) {
  return num % 2 === 0;
}

function getQuestionAnswerFunc() {
  const question = getRandomNum();
  const answer = boolToAnswer(isEven(question));

  return [question, answer];
}

export default function brainEven() {
  const gameName = 'brainEven';
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const gameQuestioningFunc = getQuestionAnswerFunc;

  startGame(gameName, gameRules, gameQuestioningFunc);
}
