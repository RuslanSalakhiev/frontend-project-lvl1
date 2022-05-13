import { getRandomNum, boolToAnswer, startGame } from '../index.js';

function isPrime(num) {
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function getQuestionAnswerFunc() {
  const question = getRandomNum();
  const answer = boolToAnswer(isPrime(question));

  return [question, answer];
}

export default function brainPrime() {
  const gameName = 'brainPrime';
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameQuestioningFunc = getQuestionAnswerFunc;

  startGame(gameName, gameRules, gameQuestioningFunc);
}
