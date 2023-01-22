/* eslint-disable import/extensions */
import startGame from '../index.js';
import getRandomNumber from '../Suporte-module/get-random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

function evenGame() {
  const question = getRandomNumber();
  let rightAnswer;
  if (isEven(question)) {
    rightAnswer = 'yes';
    return [question, rightAnswer];
  } rightAnswer = 'no';
  return [question, rightAnswer];
}

export default () => startGame(description, evenGame);