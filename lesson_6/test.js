let readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_NEEDED_TO_WIN = 5;
const WINNING_LINES = [
  [1,2,3], [4,5,6], [7,8,9], //rows
  [1,4,7], [2,5,8], [3,6,9], //columns
  [1,5,9], [3,5,7]           //diagonals
];
const FIRST_PLAYER = ['player', 'computer'];
const PLAY_AGAIN_ANSWERS = ['y', 'Y', 'n', 'N'];

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n`);
  console.log('You are up!');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(string) {
  return console.log(`=> ${string}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");

  }
  board[square] = HUMAN_MARKER;
}

function chooseRandomSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  return square;
}

function computerChoosesSquare(board, winSquare) {
  let square;

  if (winSquare.length === 0) {
    if (board['5'] === INITIAL_MARKER) {
      square = '5';
    } else {
      square = chooseRandomSquare(board);
    }
  } else {
    square = winSquare[0];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line += 1)  {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function joinOr(array, delimiter = ', ', altWord = 'or') {

  if (array.length < 2) {
    return array.join();
  } else if (array.length === 2) {
    return `${array[0]} ${altWord} ${array[1]}`;
  } else {
    let newArray = array.slice();
    newArray[newArray.length - 1] = altWord + ' ' + newArray[newArray.length - 1];
    return newArray.join(delimiter);
  }

}

function initializeScore() {
  let scoreObj = {
    human : 0,
    computer: 0
  };

  return scoreObj;
}

function updateScore(winner, scoreObj) {
  if (winner === 'Player') {
    scoreObj.human += 1;
  } else {
    scoreObj.computer += 1;
  }

  return scoreObj;
}

function findAtRiskSquare(board, squares) {
  let availableSquares = emptySquares(board);

  let winLines = WINNING_LINES.filter(line => {
    let counter = 0;
    line.forEach(element => {
      if (squares.includes(String(element))) {
        counter += 1;
      }
    });

    return counter === 2;
  });

  let winSquare = [];

  winLines.forEach(line => {
    winSquare.push(availableSquares.filter(square =>
      line.includes(Number(square))));
  });

  return winSquare.flat();
}

function chooseOffenseOrDefense(board) {
  let playerSquares = Object.keys(board).filter(key => board[key] ===
    HUMAN_MARKER);

  let computerSquares = Object.keys(board).filter(key => board[key] ===
    COMPUTER_MARKER);

  if (playerSquares.length > 1) {
    let offensiveMoves = findAtRiskSquare(board, computerSquares);
    let defensiveMoves = findAtRiskSquare(board, playerSquares);

    if (offensiveMoves.length !== 0) {
      return offensiveMoves;
    } else if (defensiveMoves.length !== 0) {
      return defensiveMoves;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === FIRST_PLAYER[0]) {
    return FIRST_PLAYER[1];
  } else {
    return FIRST_PLAYER[0];
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === FIRST_PLAYER[0]) {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board, chooseOffenseOrDefense(board));
  }
}


//game starts
let score = initializeScore();
prompt(`Match is best-of-5 games (if you choose to continue playing).`);

while (true) {
  let board = initializeBoard();
  let currentPlayer;

  prompt('Who should start first: you [y], the computer? [c], or random [any key]?');
  let choice = readline.question().trim().toLowerCase()[0];

  switch (choice) {
    case 'y' :
      currentPlayer = FIRST_PLAYER[0];
      break;
    case 'c':
      currentPlayer = FIRST_PLAYER[1];
      break;
    default:
      currentPlayer = FIRST_PLAYER[Math.floor(Math.random() * 2)];
  }

  /*if (currentPlayer === FIRST_PLAYER[0]) {
    console.log(`You are the first player!`);
  } else {
    console.log(`The game has started!`);
  }*/

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} wins!\n`);
    updateScore(detectWinner(board), score);
    prompt(`Current standings: \nPlayer: ${score.human} \nComputer: ${score.
      computer}\n`);
  } else {
    prompt("It's a tie!");
  }

  if (score.human === GAMES_NEEDED_TO_WIN || score.computer ===
    GAMES_NEEDED_TO_WIN) {
    prompt(`${detectWinner(board)} has won the best-of-5 match!`);
    score = initializeScore();
  }

  let answer;
  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer.length === 1 && PLAY_AGAIN_ANSWERS.includes(answer)) break;
    else {
      prompt(`That's not a valid answer. Please answer [Y or y] for yes or [N or n] for no.`);
    }

  }

  if (answer[0] !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');

/*
let board = initializeBoard();
let currentPlayer = FIRST_PLAYER[0];

while (true) {
  displayBoard(board);
  chooseSquare(board, currentPlayer);
  currentPlayer = alternatePlayer(currentPlayer);
  if (someoneWon(board) || boardFull(board)) break;
}*/