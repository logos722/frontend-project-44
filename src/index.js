import readlineSync from 'readline-sync';
import sayHi from './cli.js';

const roundCounts = 3;

const startGame = (description, getQuestionAndAnswer) => {
  const userName = sayHi();
  console.log(description);
  for (let i = 0; i < roundCounts; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
