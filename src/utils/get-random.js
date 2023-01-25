function getRandomNumber(num = 100) {
  const number = Math.floor(Math.random() * num);
  return number;
}

function getRandomFromRangeOf(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

export  { getRandomNumber, getRandomFromRangeOf };
