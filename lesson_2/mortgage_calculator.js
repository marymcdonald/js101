let readline = require('readline-sync');

function monthlyInterestRate (annualRate) {
  return (annualRate / 100) / 12;
}

function monthlyPayment (loanAmount, monthlyInterestRate, loanDurationMonths) {
  if (monthlyInterestRate === 0) { //no-interest loans
    return loanAmount / loanDurationMonths;
  } else {
    return loanAmount * (monthlyInterestRate / (1 - Math.pow((1 +
      monthlyInterestRate), (-loanDurationMonths))));
  }
}

function loanMonths (years, months) {
  if (years === 0) { //if loan was only quoted in months, then no calculation needed.
    return Number(months);
  } else {
    return (Number(years) * 12) + Number(months);
  }
}

function prompt(message) {
  return console.log(`~ ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function displayWelcomeMessage() {
  prompt('Welcome to Mortgage Calculator! Please enter in the following info: ');
}

function getLoanAmount() {
  prompt('Loan Amount ($xx.xx): ');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('That was not a valid number. Please try again.');
    loanAmount = readline.question();
  }

  return Number(loanAmount);
}

function getLoanMonths() {
  prompt('Months');
  let months = readline.question();

  while (invalidNumber(months)) {
    prompt('That was not a valid number. Please try again.');
    months = readline.question();
  }
  return months;
}

function getLoanYears() {
  prompt('Please enter in the loan term, in either years or months (or both)');
  prompt('Years: ');
  let years = readline.question();

  while (invalidNumber(years)) {
    prompt('That was not a valid number. If your loan was only quoted in months, please enter 0.');
    years = readline.question();
  }
  return years;
}

function getLoanDuration() {
  let years = getLoanYears();
  let months = getLoanMonths();

  while (years === '0' && months === '0') {
    prompt('You\'ve entered 0 years and 0 months for for your loan duration. Please try again.');
    prompt('Years: ');
    years = readline.question();
    prompt('Months');
    months = readline.question();
  }
  return {
    years: years,
    months: months
  };
}

function getAnnualInterestRate() {
  prompt('Annual Interest Rate (xx.xx%):');
  let annualInterestRate = readline.question();

  while (invalidNumber(annualInterestRate)) {
    prompt('That was not a valid number. Please try again.');
    annualInterestRate = readline.question();
  }
  return Number(annualInterestRate);
}

function validateFinalAnswer(answer) {
  const VALID_ANSWERS = ['y', 'yes'];
  if (answer.length === 0) {
    return false;
  } else if (VALID_ANSWERS.includes(answer.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

let answer; //for last prompt about continuing (more calculations)

do {
  console.clear();
  displayWelcomeMessage();
  let loanAmount = getLoanAmount();
  let loanDuration = getLoanDuration();
  let annualInterestRate = getAnnualInterestRate();

  let monthlyRate = monthlyInterestRate(annualInterestRate);
  let paymentPerMonth = monthlyPayment(loanAmount, monthlyRate,
    loanMonths(loanDuration.years, loanDuration.months));

  prompt(`Your monthly payment will be: $${paymentPerMonth.toFixed(2)}`);
  prompt('To do another mortgage calculation, please enter Yes or y. To exit, press any other key.');
  answer = readline.question();

} while (validateFinalAnswer(answer));


prompt('Thanks for using Mortgage Calculator! Bye for now.');