let readline = require('readline-sync');
const SUITS_SYMBOLS = {
  H: '♥',
  D: '♦',
  C: '♣',
  S: '♠',
};
const ACCEPTABLE_ANSWERS_PLAY = ['s', 'S', 'h', 'H'];
const ACCEPTABLE_ANSWERS_END_GAME = ['y', 'Y', 'n', 'N'];
const HAND_LIMIT = 21;
const DEALER_LIMIT = 17;
const PLAYERS = ['player', 'dealer'];
const GAMES_NEEDED_TO_WIN_MATCH = 3;

function initializeDeck() {
  let deck = {
    H: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    D: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    C: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    S: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  };
  return deck;
}

function initializeHand() {
  let hand = [];
  return hand;
}

function addToHand(hand, card) {
  hand.push(card);
  return hand;
}

function dealCard(deck) {
  let card = [];

  let suits = Object.keys(deck);
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  let numOfCards = deck[randomSuit].length;
  let randomCard = deck[randomSuit][Math.floor(Math.random() * numOfCards)];

  let position = deck[randomSuit].indexOf(randomCard);
  deck[randomSuit].splice(position, 1);             //remove card from deck

  card = [randomSuit, randomCard];
  return card;
}

function calculateTotal(hand) {
  let faceCards = ['J', 'Q', 'K'];
  let cards = hand.map(card => {
    if (faceCards.includes(card[1])) {
      return 10;
    } else if (card[1] === 'A') {
      return [1, 11];
    } else {
      return Number(card[1]);
    }
  });

  return subTotal(cards);
}

function subTotal(handOfCards) {
  let noAces = handOfCards.filter(card => !Array.isArray(card));
  let justAces = handOfCards.filter(card => Array.isArray(card));

  let reducedTotal = 0;
  if (noAces.length !== 0) {
    reducedTotal = noAces.reduce((prev, current) => prev + current);
  }

  let counter = justAces.length;

  while (counter > 0) {
    if (reducedTotal < 11) {
      reducedTotal += 11;
    } else {
      reducedTotal += 1;
    }
    counter -= 1;
  }

  return reducedTotal;
}

function prompt(text) {
  console.log(`=> ${text}`);
}

function formatCardsDisplay(hand, player = 'you') {
  let handStr = [];
  let suitsInHand = hand.map(card => card[0]);
  let iterateOver = 0;

  if (player === 'you') {
    iterateOver = suitsInHand.length;
  } else {
    iterateOver = suitsInHand.length - 1; //one less for a hidden card
    handStr.push('hidden card');
  }

  for (let index = 0; index < iterateOver; index += 1) {
    handStr.push(`${hand[index][1]}${SUITS_SYMBOLS[suitsInHand[index]]}`);
  }

  return prompt(handStr.join(', ') + '\n');
}

function playerTurn(playerHand, playerTotal, deck) {

  while (true) {
    prompt("Would you like to hit (h/H) or stay (s/S)?");
    let answer = readline.prompt();

    while (!ACCEPTABLE_ANSWERS_PLAY.includes(answer)) {
      prompt('Sorry, that\'s not one of the options.');
      prompt("Would you like to hit (h/H) or stay (s/S)?");
      answer = readline.prompt();
    }

    if (answer.toLowerCase() === 'h') {
      addToHand(playerHand, dealCard(deck));
      prompt('Your hand:');
      formatCardsDisplay(playerHand);
    }

    playerTotal = calculateTotal(playerHand);

    if (answer.toLowerCase() === 's' || busted(playerTotal)) break;

  }

}

function dealerTurn(dealerHand, dealerTotal, deck) {
  while (dealerTotal <= DEALER_LIMIT) {
    console.clear();
    prompt(`Dealer draws a card.\n`);
    wait(1500);
    addToHand(dealerHand, dealCard(deck));
    prompt('Dealer\'s hand: ');
    formatCardsDisplay(dealerHand, 'dealer');
    dealerTotal = calculateTotal(dealerHand);
    wait(1500);
  }
}

function busted(handTotal) {
  return handTotal > HAND_LIMIT;
}

function announceBust(player) {
  let text = '';
  if (player === 'you') {
    text = 'You went bust! You lose (-_-)"';
  } else {
    text  = 'Dealer went bust! You win! (^_^)';
  }
  return prompt(text);
}

function displayWinner(outcome) {
  if (outcome === 'bust') {
    announceBust('dealer');
  } else if (outcome === 'player') {
    prompt('You are the winner! Hooray (ɔ◔‿◔)ɔ ♥');
  } else if (outcome === 'dealer') {
    prompt('Dealer wins! (˘︹˘)"');
  } else {
    prompt(`It's a tie! ʕ•́ᴥ•̀ʔっ`);
  }
}

function determineWinner(playerTotal, dealerTotal) {
  let gameOutcome = '';
  if (busted(dealerTotal)) {
    gameOutcome = 'bust';
  } else if (playerTotal > dealerTotal) {
    gameOutcome = 'player';
  } else if (playerTotal < dealerTotal) {
    gameOutcome = 'dealer';
  } else {
    gameOutcome = 'tie';
  }
  return gameOutcome;
}

function choosePlayAgain() {
  prompt("Would you like to play again? y/n");
  let answer = readline.prompt();

  while (!ACCEPTABLE_ANSWERS_END_GAME.includes(answer)) {
    prompt('Sorry, that\'s not one of the options.');
    prompt("Would you like to play again? Y/N");
    answer = readline.prompt();
  }
  return answer;
}

function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < (start + ms)) {
    end = new Date().getTime();
  }
}

function initializeGameScores() {
  let scores = {
    player: 0,
    dealer: 0,
  };
  return scores;
}

function updateScores(winner, scores) {
  scores[winner] += 1;
  return scores;
}

function updateGameTally(playerTotal, dealerTotal, scores) {
  if (busted(playerTotal)) {
    updateScores(PLAYERS[1], scores);
  } else if (busted(dealerTotal)) {
    updateScores(PLAYERS[0], scores);
  } else if (playerTotal > dealerTotal) {
    updateScores(PLAYERS[0], scores);
  } else if (playerTotal < dealerTotal) {
    updateScores(PLAYERS[1], scores);
  }
}

function bestOfFive(scores) {
  let winner = null;
  if (scores[PLAYERS[0]] === GAMES_NEEDED_TO_WIN_MATCH) {
    winner = PLAYERS[0];
  } else if (scores[PLAYERS[1]] === GAMES_NEEDED_TO_WIN_MATCH) {
    winner = PLAYERS[1];
  }
  return winner;
}

function overallGameEnd(winner) {
  let matchWinner = winner;
  if (matchWinner) {
    if (matchWinner === PLAYERS[0]) {
      prompt(`You are the overall winner!\n`);
    } else if (matchWinner === PLAYERS[1]) {
      prompt(`The dealer is the overall winner!\n`);
    }
  }
}

function displayFinalScore(playerHand, dealerHand, playerTotal, dealerTotal,
  scores) {
  wait(2000);
  console.log(`--------------------------`);
  displayWinner(determineWinner(playerTotal, dealerTotal));
  console.log(`--------------------------`);
  prompt('Final Hands: ');
  prompt('Your hand: ');
  formatCardsDisplay(playerHand);
  prompt('Dealer\'s hand: ');
  formatCardsDisplay(dealerHand);
  wait(1500);

  prompt(`Final scores: you - ${playerTotal}, dealer – ${dealerTotal}\n`);
  wait(500);
  updateGameTally(playerTotal, dealerTotal, scores);
  prompt(`Overall game scores: you - ${scores.player}, dealer - ${scores.dealer}`);
  wait(1000);
}

let scores = initializeGameScores();
while (true) {
  console.clear();
  prompt(`Welcome to Twenty-One!`);
  let deck = initializeDeck();

  let playerHand = initializeHand();
  addToHand(playerHand, dealCard(deck));
  addToHand(playerHand, dealCard(deck));

  prompt('Your hand:');
  formatCardsDisplay(playerHand); // show player hand


  let dealerHand = initializeHand();
  addToHand(dealerHand, dealCard(deck));
  addToHand(dealerHand, dealCard(deck));

  let playerTotal = calculateTotal(playerHand);
  let dealerTotal = calculateTotal(dealerHand);

  prompt('Dealer\'s hand: ');
  formatCardsDisplay(dealerHand, 'dealer');

  while (true) {

    playerTurn(playerHand, playerTotal, deck);
    playerTotal = calculateTotal(playerHand);

    if (busted(playerTotal)) {
      announceBust('you');
      updateGameTally(playerTotal, dealerTotal, scores);
      prompt(`Overall game scores: you - ${scores.player}, dealer - ${scores.dealer}`);
      break;
    } else {
      console.log(`You chose to stay. Now it's the dealer's turn!\n`);
      wait(1000);
    }

    dealerTurn(dealerHand, dealerTotal, deck);
    dealerTotal = calculateTotal(dealerHand);

    if (dealerHand.length === 2) {
      prompt(`Dealer stays with 2 cards.\n`);
    }

    displayFinalScore(playerHand, dealerHand, playerTotal, dealerTotal, scores);

    break;

  }
  let currentGameScore = bestOfFive(scores);

  if (currentGameScore) {
    console.clear();
    overallGameEnd(currentGameScore);
    scores = initializeGameScores();
  }


  let answer = choosePlayAgain();
  if (answer.toLowerCase() === 'n') break;

}

