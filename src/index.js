#!/usr/bin/env node
import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
}

function askName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function showRules(gameRules) {
  console.log(gameRules);
}

function askQuestion(questionText) {
  console.log(`Question: ${questionText}`);

  return readlineSync.question('Your answer: ');
}

function correctReply() {
  console.log('Correct!');
}

function incorrectReply(actualAnswer, correctAnswer, name) {
  console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
}

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

export function startGame(game, rules, gameFunc) {
  let counts = 1;
  let isCorrectAnswer;
  const maxQuestions = 3;

  greeting();
  const name = askName();
  showRules(rules);

  do {
    const [question, correctAnswer] = gameFunc();
    const answer = askQuestion(question);

    isCorrectAnswer = String(answer) === String(correctAnswer);

    if (isCorrectAnswer) {
      correctReply();
      counts += 1;
    } else {
      incorrectReply(answer, correctAnswer, name);
      break;
    }
  } while (isCorrectAnswer && counts <= maxQuestions);

  if (isCorrectAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
}
