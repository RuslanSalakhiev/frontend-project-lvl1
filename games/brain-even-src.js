import { getRandomNum, boolToAnswer } from '../src/index.js';

function isEven(num) {
  return num % 2 === 0;
}

export default function getQuestionAnswerFunc() {
  const question = getRandomNum();
  const answer = boolToAnswer(isEven(question));

  return [question, answer];
}
