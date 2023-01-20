function num() {
  const number = Math.round(Math.random() * 50);
  return number;
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
  console.log(number);
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

function gameProgressive() {
  const userName = sayHi();
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 3; i += 1) {
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
