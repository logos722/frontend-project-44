/* eslint-disable import/extensions */
import startGame from '../index.js';
import getRandomNumber from '../Suporte-module/get-random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(n) {
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
}

function primeGame() {
  const num1 = getRandomNumber();
  const rightAnswer = isPrime(num1);
  const question = `${num1}`;
  return [question, rightAnswer];
}

export default () => startGame(description, primeGame);
