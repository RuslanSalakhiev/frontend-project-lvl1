import { getRandomNum, getRandomOperator, calculate } from '../src/index.js';

export default function getQuestionAnswerFunc() {
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

  console.log(sequence, hiddenValue);
  return [sequence, hiddenValue];
}
