#!/usr/bin/env node
import * as di from './dialog.js';

export function boolToAnswer(bool) {
  return bool ? 'yes' : 'no';
}
const operations = ['+', '-', '*'];

export function getRandomOperator() {
  return operations[Math.floor(Math.random() * operations.length)];
}

export function getRandomNum(max = 10, min = 1) {
  return Math.round(Math.random() * (max - min)) + min;
}

export function calculate(firstNum, secondNum, operator) {
  if (operator === '+') return parseInt(firstNum, 10) + parseInt(secondNum, 10);
  if (operator === '-') return parseInt(firstNum, 10) - parseInt(secondNum, 10);
  if (operator === '*') return parseInt(firstNum, 10) * parseInt(secondNum, 10);
  return 'error';
}

export function startGame(game, rules, gameFunc) {
  let counts = 1;
  let isCorrectAnswer;

  const name = di.askName(rules);

  do {
    const [question, correctAnswer] = gameFunc();
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
