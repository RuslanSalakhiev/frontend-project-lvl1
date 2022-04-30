#!/usr/bin/env node
import * as di from './dialog.js';

function startGame(game, rules) {
  let counts = 1;
  const name = di.greeting(rules);
  let isCorrectAnswer;

  do {
    const question = di.getQuestion(game);
    const answer = di.askQuestion(question);
    const correctAnswer = di.getCorrectAnswer(game, question);
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

export function brainEven() {
  const gameName = 'brainEven';
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

  startGame(gameName, gameRules);
}

export function brainCalc() {
  const gameName = 'brainCalc';
  const gameRules = 'What is the result of the expression?';

  startGame(gameName, gameRules);
}

export function brainGCD() {
  const gameName = 'brainGCD';
  const gameRules = 'Find the greatest common divisor of given numbers.';

  startGame(gameName, gameRules);
}

