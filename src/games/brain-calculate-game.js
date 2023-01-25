import startGame from '../index.js';
import { getRandomNumber } from '../utils/get-random.js';

const description = 'What is the result of the expression?';

function calculate(num1, num2, sign) {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      throw new Error(`Unknown order state: '${order.state}'!`);
  }
}

function randomSign() {
  const signs = ['+', '-', '*'];
  const random = getRandomNumber(signs.length);
  const randSign = signs[random];

  return randSign;
}

function calculateGame() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = randomSign();
  const question = `${num1} ${sign} ${num2}`;
  const nedeedAnswer = calculate(num1, num2, sign);
  const rightAnswer = `${nedeedAnswer}`;

  return [question, rightAnswer];
}

export default () => startGame(description, calculateGame);
