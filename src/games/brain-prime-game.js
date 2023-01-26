import startGame from '../index.js';
import { getRandomNumber } from '../utils/get-random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(n) {
  if (n === 0 || n === 1) return false;

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

function primeGame() {
  const num1 = getRandomNumber();
  const rightAnswer = isPrime(num1) ? 'yes' : 'no';
  const question = `${num1}`;
  return [question, rightAnswer];
}

export default () => startGame(description, primeGame);
