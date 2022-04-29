#!/usr/bin/env node
import * as be from '../src/brain-even.js';

let counts = 1;
const name = be.greeting();
let isCorrectAnswer;

do {
  const randomNum = be.getRandomNum();
  const answer = be.askQuestion(randomNum);
  const correctAnswer = be.getCorrectAnswer(randomNum);
  isCorrectAnswer = answer === correctAnswer;

  if (isCorrectAnswer) {
    be.correctReply();
    counts += 1;
  } else {
    be.incorrectReply(answer, correctAnswer, name);
    break;
  }
} while (isCorrectAnswer && counts <= 3);

if (isCorrectAnswer) {
  console.log(`Congratulations, ${name}!`);
}
