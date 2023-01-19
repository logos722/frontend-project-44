import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import sayHi from '../src/cli.js';

function num() {
    const number = (Math.round(Math.random() * 100));
    return number;
  }

export default function evenGame() {
  const userName = sayHi();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const answer = readlineSync.question(`${'Question: '}${randomNum}${'\nYour answer: '}`);
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Coorect!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
}
console.log(`Congratulations, ${userName}!`);
};
