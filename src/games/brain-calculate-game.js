/* eslint-disable import/extensions */
import startGame from '../index.js';
import getRandomNumber from '../Suporte-module/get-random.js';

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
      // eslint-disable-next-line no-console
      console.log('error');
  }
  return sign;
}

function randomSign() {
  const signs = ['+', '-', '*'];
  const random = Math.floor(Math.random() * signs.length);
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
