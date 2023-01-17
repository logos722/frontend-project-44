import readlineSync from "readline-sync";

const sayHi = (userName) => {
  userName = readlineSync.question("May i have your name? ");
  console.log(`Hi ${userName}!`);
};

export default sayHi;
