import { getRandomNum, getRandomOperator, calculate } from '../src/index.js';

export default function getQuestionAnswerFunc() {
  const randNum1 = getRandomNum();
  const randNum2 = getRandomNum();
  const randOperator = getRandomOperator();

  const question = `${randNum1} ${randOperator} ${randNum2}`;
  const answer = calculate(randNum1, randNum2, randOperator);

  return [question, answer];
}
