/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { sayHi } from './cli.js';

function num() {
  const number = (Math.round(Math.random() * 50));
  return number;
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function randomSign() {
  const signs = ['+', '-', '*'];
  const randomS = Math.floor(Math.random() * signs.length);
  const rand = signs[randomS];
  return rand;
}

function calculate(num1, num2, sign) {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      console.log('error');
  }
  return sign;
}

function evenGame() {
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
}

function calculateGame() {
  const userName = sayHi();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const num2 = num();
    const sign = randomSign();
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${sign} ${num2} ${'\nYour answer: '}`);
    const nedeedAnswer = calculate(num1, num2, sign);
    const rightAnswer = `${str}${nedeedAnswer}`;
    if (quest === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${rightAnswer}${'\nLet`s try again'}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

function nodeGame() {
  const userName = sayHi();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const num2 = num();
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${num2} ${'\nYour answer: '}`);
    const rightAnswer = NOD(num1, num2);
    const rightAnswerStr = `${str}${rightAnswer}`;
    if (quest === rightAnswerStr) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${rightAnswerStr}${'\nLet`s try again'}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export {
  num, randomSign, calculate, calculateGame, evenGame, nodeGame,
};
