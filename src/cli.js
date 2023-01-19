import readlineSync from 'readline-sync';

const sayHi = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hi ${userName}!`);
  return userName;
};

// eslint-disable-next-line import/prefer-default-export
export { sayHi };
