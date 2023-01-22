/* eslint-disable import/extensions */
import startGame from '../index.js';
import getRandomNumber from '../Suporte-module/get-random.js';
import getRandomFromRangeOf from '../Suporte-module/get-random-in-range.js';

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
  const coll = [];

  for (let i = 0; i <= result.length - 1; i += 1) {
    if (i === number) {
      hidenElement = result[i];
      coll.push('..');
    } else {
      coll.push(result[i]);
    }
  }
  const completeProgression = coll.join(' ');

  return [completeProgression, hidenElement];
}

function gameProgressive() {
  const fullProgression = selectHideElmnt();
  const progressionBody = fullProgression[0];
  const nedeedNumber = fullProgression[1];
  const quest = `${progressionBody}`;
  const rightAnswer = `${nedeedNumber}`;

  return [quest, rightAnswer];
}

export default () => startGame(description, gameProgressive);
