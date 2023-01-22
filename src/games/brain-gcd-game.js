/* eslint-disable import/extensions */
import startGame from '../index.js';
import getRandomNumber from '../Suporte-module/get-random.js';

const description = 'Find the greatest common divisor of given numbers.';

function NOD(x, y) {
  if (y > x) return NOD(y, x);

  if (!y) return x;

  return NOD(y, x % y);
}

function nodeGame() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const quest = `${num1} ${num2} `;
  const calcAnswer = NOD(num1, num2);
  const rightAnswer = `${calcAnswer}`;
  return [quest, rightAnswer];
}

export default () => startGame(description, nodeGame);
