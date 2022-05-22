import { startGame, boolToAnswer } from '../index.js';
import { getRandomNum } from '../utils.js';

const GAMERULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function getQuestionAndCorrectAnswer() {
  const question = getRandomNum();
  const answer = boolToAnswer(isPrime(question));

  return [question, answer];
}

export default function brainPrime() {
  startGame(GAMERULES, getQuestionAndCorrectAnswer);
}
