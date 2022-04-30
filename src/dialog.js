import readlineSync from 'readline-sync';
import * as calc from './calcs.js';

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

export function getQuestion(game) {
  if (game === 'brainEven') return calc.getRandomNum();
  if (game === 'brainCalc') return `${calc.getRandomNum()} ${calc.getRandomOperator()} ${calc.getRandomNum()}`;
  if (game === 'brainGCD') return `${calc.getRandomNum()} ${calc.getRandomNum()}`;
  return null;
}

export function getCorrectAnswer(game, question) {
  if (game === 'brainEven') return calc.isEven(question);
  if (game === 'brainCalc') {
    const [first, operator, second] = question.split(' ');
    return calc.calculate(first, second, operator);
  }
  if (game === 'brainGCD') {
    const [first, second] = question.split(' ');
    return calc.getGCD(first, second);
  }
  return null;
}
