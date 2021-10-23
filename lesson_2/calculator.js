/* eslint-disable max-lines-per-function */
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const calcMessages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function oneMoreTime(answer, language) {
  let response = false;
  switch (language) {
    case 'EN':
      if (answer[0].toLowerCase() === 'y') {
        response = true;
      }
      break;
    case 'FR':
      if (answer[0].toLowerCase() === 'o') {
        response = true;
      }
      break;
    case 'DE':
      if (answer[0].toLowerCase() === 'j') {
        response = true;
      }
      break;
  }
  return response;
}

prompt(calcMessages.langMessage.intro);
let messageLanguage = readline.question();


prompt(calcMessages[messageLanguage].welcome);
let reply;

do {
  prompt(calcMessages[messageLanguage].first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(calcMessages[messageLanguage].invalidNum);
    number1 = readline.question();
  }

  prompt(calcMessages[messageLanguage].second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(calcMessages[messageLanguage].invalidNum);
    number2 = readline.question();
  }

  prompt(calcMessages[messageLanguage].operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(calcMessages[messageLanguage].invalidOperation);
    operation = readline.question();
  }

  let output;
  switch (operation) { // '1' represents addition
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${calcMessages[messageLanguage].result}${output}`);
  prompt(calcMessages[messageLanguage].nextAction);
  reply = readline.question();
} while (oneMoreTime(reply, messageLanguage));