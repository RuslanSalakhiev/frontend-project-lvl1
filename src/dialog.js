import readlineSync from 'readline-sync';
import * as calc from './calcs.js';

function boolToAnswer(bool) {
  return bool ? 'yes' : 'no';
}

export function greeting(gameRules) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  return name;
}

export function askQuestion(questionText) {
  console.log(`Question: ${questionText}`);

  return readlineSync.question('Your answer: ');
}

export function correctReply() {
  console.log('Correct!');
}

export function incorrectReply(actualAnswer, correctAnswer, name) {
  console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
}

// returns [question, correctAnswer]
export function getQuestion(game) {
  if (game === 'brainEven') {
    const randNum = calc.getRandomNum();
    const correctAnswer = boolToAnswer(calc.isEven(randNum));
    return [randNum, correctAnswer];
  }
  if (game === 'brainCalc') {
    const randNum1 = calc.getRandomNum();
    const randNum2 = calc.getRandomNum();
    const randOperator = calc.getRandomOperator();
    const correctAnswer = calc.calculate(randNum1, randNum2, randOperator);
    return [`${randNum1} ${randOperator} ${randNum2}`, correctAnswer];
  }
  if (game === 'brainGCD') {
    const randNum1 = calc.getRandomNum();
    const randNum2 = calc.getRandomNum();
    const correctAnswer = calc.getGCD(randNum1, randNum2);
    return [`${randNum1} ${randNum2}`, correctAnswer];
  }
  if (game === 'brainProgression') {
    let sequence = '';
    const seqOperator = calc.getRandomOperator();
    const seqLength = calc.getRandomNum(10, 5);
    const seqInitNum = calc.getRandomNum();
    const hiddenNumIndex = calc.getRandomNum(seqLength);
    let hiddenValue;
    for (let i = 0; i < seqLength; i += 1) {
      let seqNum = calc.calculate(seqInitNum, seqInitNum * i, seqOperator);
      if (hiddenNumIndex === i) {
        hiddenValue = seqNum;
        seqNum = '..';
      }
      sequence += `${seqNum} `;
    }
    return [sequence, hiddenValue];
  }

  if (game === 'brainPrime') {
    const randNum = calc.getRandomNum();
    const correctAnswer = boolToAnswer(calc.isPrime(randNum));
    return [randNum, correctAnswer];
  }
  return null;
}
