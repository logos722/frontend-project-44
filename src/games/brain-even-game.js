import startGame from '../index.js';
import {getRandomNumber} from '../utils/get-random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function evenGame() {
  const question = getRandomNumber();
  let rightAnswer;

  if (isEven(question)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [question, rightAnswer];
}

export default () => startGame(description, evenGame);
