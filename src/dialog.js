import readlineSync from 'readline-sync';

export function askName(gameRules) {
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
