import startGame from '../index.js';
import { getRandomNumber, getRandomFromRangeOf } from '../utils/get-random.js';

const description = 'What number is missing in the progression?';

function getRandomOnlyMax(max) {
  return Math.floor(Math.random() * max);
}

function progression() {
  const stepSize = getRandomFromRangeOf(2, 10);
  const result = [];
  let progressionNumber = getRandomNumber();
  const progressionLength = getRandomFromRangeOf(5, 10);

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(progressionNumber);
    progressionNumber += stepSize;
  }

  return result;
}

function selectHideElmnt() {
  const result = progression();
  let hidenElement;
  const number = getRandomOnlyMax(result.length);
  const collection = [];

  for (let i = 0; i <= result.length - 1; i += 1) {
    if (i === number) {
      hidenElement = result[i];
      collection.push('..');
    } else {
      collection.push(result[i]);
    }
  }
  const completeProgression = collection.join(' ');

  return [completeProgression, hidenElement];
}

function gameProgressive() {
  const fullProgression = selectHideElmnt();
  const progressionBody = fullProgression[0];
  const nedeedNumber = fullProgression[1];
  const quest = progressionBody.toString();
  const rightAnswer = nedeedNumber.toString();

  return [quest, rightAnswer];
}

export default () => startGame(description, gameProgressive);
