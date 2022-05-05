#!/usr/bin/env node
import * as di from './dialog.js';
import * as calc from './calcs.js';

function boolToAnswer(bool) {
  return bool ? 'yes' : 'no';
}

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

export function startGame(game, rules) {
  let counts = 1;
  let isCorrectAnswer;

  const name = di.askName(rules);

  do {
    const [question, correctAnswer] = getQuestion(game);
    const answer = di.askQuestion(question);

    isCorrectAnswer = String(answer) === String(correctAnswer);

    if (isCorrectAnswer) {
      di.correctReply();
      counts += 1;
    } else {
      di.incorrectReply(answer, correctAnswer, name);
      break;
    }
  } while (isCorrectAnswer && counts <= 3);

  if (isCorrectAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
}
