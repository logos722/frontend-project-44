import startGame from '../index.js';
import { getRandomNumber } from '../utils/get-random.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGCD(x, y) {
  if (y > x) return getGCD(y, x);

  if (!y) return x;

  return getGCD(y, x % y);
}

function gcdGame() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const quest = `${num1} ${num2} `;
  const calcAnswer = getGCD(num1, num2);
  const rightAnswer = `${calcAnswer}`;
  return [quest, rightAnswer];
}

export default () => startGame(description, gcdGame);
