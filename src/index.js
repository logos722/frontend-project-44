/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { sayHi } from './cli.js';

function num() {
  const number = Math.round(Math.random() * 50);
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

function getRandomStep() {
  return Math.floor(Math.random() * (11 - 2) + 2);
}

function getRandomLength() {
  return Math.floor(Math.random() * (10 - 5) + 5);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function progression() {
  const step = getRandomStep();
  const result = [];
  let j = num();
  const goal = getRandomLength();
  for (let i = 0; i < goal; i += 1) {
    result.push(j);
    j += step;
  }
  return result;
}

function ad() {
  const result = progression();
  let numberind;
  const number = getRandomInt(result.length);
  const coll = [];
  for (let i = 0; i <= result.length - 1; i += 1) {
    if (i === number) {
      numberind = result[i];
      coll.push('..');
    } else {
      coll.push(result[i]);
    }
  }
  let str = '';
  str = `${str}${coll}`;
  const re = /,/gi;
  const newstr = str.replace(re, ' ');
  return [newstr, numberind];
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

function evenGame() {
  const userName = sayHi();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const answer = readlineSync.question(
      `${'Question: '}${randomNum}${'\nYour answer: '}`
    );
    if (
      (randomNum % 2 === 0 && answer === 'yes')
      || (randomNum % 2 !== 0 && answer === 'no')
    ) {
      console.log('Coorect!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
      );
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
    const quest = readlineSync.question(
      `${'Question: '}${num1} ${sign} ${num2} ${'\nYour answer: '}`
    );
    const nedeedAnswer = calculate(num1, num2, sign);
    const rightAnswer = `${str}${nedeedAnswer}`;
    if (quest === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${quest}${' is wrong answer ;(. Correct answer was '}${rightAnswer}${'\nLet`s try again'}, ${userName}!`
      );
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
    const quest = readlineSync.question(
      `${'Question: '}${num1} ${num2} ${'\nYour answer: '}`
    );
    const rightAnswer = NOD(num1, num2);
    const rightAnswerStr = `${str}${rightAnswer}`;
    if (quest === rightAnswerStr) {
      console.log('Correct!');
    } else {
      console.log(
        `${quest}${' is wrong answer ;(. Correct answer was '}${rightAnswerStr}${'\nLet`s try again'}, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

function gameProgressive() {
  const userName = sayHi();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const fullProgression = ad();
    const progressionBody = fullProgression[0];
    const nedeedNumber = fullProgression[1];
    const quest = readlineSync.question(
      `${'Question: '}${progressionBody} ${'\nYour answer: '}`
    );
    let rightAnswer = '';
    rightAnswer = `${rightAnswer}${nedeedNumber}`;
    if (quest === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${quest} ${'is wrong answer ;(. Correct answer was'} ${rightAnswer}. ${"\nLet's try again"}, ${userName}!`
      );
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
}

function primeGame() {
  const userName = sayHi();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const primeCheck = isPrime(num1);
    const quest = readlineSync.question(
      `${'Question: '}${num1}${'\nYour answer:'}`
    );
    if (quest === primeCheck) {
      console.log('Correct!');
    } else {
      console.log(
        `${quest}${' is wrong answer ;(. Correct answer was '}${primeCheck}${'\nLet`s try again'}, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export {
  num,
  randomSign,
  calculate,
  calculateGame,
  evenGame,
  nodeGame,
  gameProgressive,
  primeGame,
};
