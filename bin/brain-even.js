#!/usr/bin/env node

import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
}

function getRandomNum() {
  return Math.round(Math.random() * 10);
}

function askQuestion(questionNum) {
  console.log(`Question: ${questionNum}`);

  return readlineSync.question('Your answer: ');
}

function getCorrectAnswer(questionNum) {
  return questionNum % 2 === 0 ? 'yes' : 'no';
}

function correctReply() {
  console.log('Correct!');
}

function incorrectReply(actualAnswer, correctAnswer, name) {
  console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
}

// Start
let counts = 1;
const name = greeting();
let isCorrectAnswer;

do {
  const randomNum = getRandomNum();
  const answer = askQuestion(randomNum);
  const correctAnswer = getCorrectAnswer(randomNum);
  isCorrectAnswer = answer === correctAnswer;

  if (isCorrectAnswer) {
    correctReply();
    counts += 1;
  } else {
    incorrectReply(answer, correctAnswer, name);
    break;
  }
} while (isCorrectAnswer && counts <= 3);

if (isCorrectAnswer) {
  console.log(`Congratulations, ${name}!`);
}
