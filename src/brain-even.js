import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
}

export function getRandomNum() {
  return Math.round(Math.random() * 10);
}

export function askQuestion(questionNum) {
  console.log(`Question: ${questionNum}`);

  return readlineSync.question('Your answer: ');
}

export function getCorrectAnswer(questionNum) {
  return questionNum % 2 === 0 ? 'yes' : 'no';
}

export function correctReply() {
  console.log('Correct!');
}

export function incorrectReply(actualAnswer, correctAnswer, name) {
  console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
}
