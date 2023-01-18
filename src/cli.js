import readlineSync from 'readline-sync';

const sayHi = (userName) => {
  // eslint-disable-next-line no-param-reassign
  userName = readlineSync.question('May i have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hi ${userName}!`);
};

export default sayHi;
