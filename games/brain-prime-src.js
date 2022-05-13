import { getRandomNum, boolToAnswer } from '../src/index.js';

function isPrime(num) {
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export default function getQuestionAnswerFunc() {
  const question = getRandomNum();
  const answer = boolToAnswer(isPrime(question));

  return [question, answer];
}
