const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_SHORTENED_CHOICES = ['r', 'p', 's', 'l', 'k'];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

function determineWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return -1;
  } else {
    return WINNING_COMBOS[choice].includes(computerChoice);
  }

}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  let outcome = determineWinner(choice, computerChoice);

  if (outcome) {
    prompt('You win!');
  } else if (!outcome) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function mapInputToValidChoice(input) {
  const mapChoiceObject = {
    r: 'rock',
    p: 'paper',
    s: 'scissors',
    l: 'lizard',
    k: 'spock',
  };
  return mapChoiceObject[input];
}

function initializeTallyObject() {
  let tallyObject = {
    user: 0,
    computer: 0,
  };
  return tallyObject;
}

function tallyWins(tallyObject, result) {
  if (result) {
    tallyObject.user += 1;
  } else if (!result) {
    tallyObject.computer += 1;
  }
  return tallyObject;
}

function displayTallyObject(tallyObject) {
  console.log(`\nCurrent tally:\nUser wins: ${tallyObject.user} vs. Computer wins: ${tallyObject.computer}\n`);
}

function playAgain() {
  console.log('\nDo you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function displayWelcomeMessage(){
  prompt('Welcome to Rock-Paper-Scissors-Lizard-Spock!');
}

let tally = initializeTallyObject();
displayWelcomeMessage();
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')} or ${VALID_SHORTENED_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice) && !(VALID_SHORTENED_CHOICES.
    includes (choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  let winner;

  if (VALID_SHORTENED_CHOICES.includes(choice)) {
    displayWinner(mapInputToValidChoice(choice), computerChoice);
    winner = determineWinner(mapInputToValidChoice(choice), computerChoice);
  } else {
    displayWinner(choice, computerChoice);
    winner = determineWinner(choice, computerChoice);
  }

  displayTallyObject(tallyWins(tally, winner));
  let userResponse = 'y';
  if ((tally.user + tally.computer) <= 5 && (tally.user === 3 || tally.
    computer === 3)) {
    if (tally.user === 3) {
      prompt('You\'re the big winner!');
    } else {
      prompt('The computer\'s the big winner!');
    }
    userResponse = playAgain();
    if (userResponse[0] === 'y') console.clear();
    tally = initializeTallyObject();
  }
  if (userResponse[0] !== 'y') break;
}

prompt('Thanks for playing! (^_^)');