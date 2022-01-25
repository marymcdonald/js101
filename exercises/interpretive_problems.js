/*
//q1

function lightsOn(switches) {
  let switchArray = [];
  let counter = 2;

  for (let index = 0; index <= switches; index += 1) {
    switchArray.push(1);
  }

  for (let index = 2; index <= switches; index += 1) {
    while (true) {
      if (counter % index === 0) {
        switchArray[counter] = (switchArray[counter] === 1) ? 0 : 1;
      }

      if (counter === switches) break;
      counter += 1;
    }
    counter = 0;

  }
  let finalArray = switchArray.map((value, index) => {
    if (value === 1) {
      return index;
    } else {
      return value;
    }
  });
  return finalArray.filter(value => value !== 0);

}

console.log(lightsOn(5));        // [1, 4]


console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


//q2
function diamond(num) {
  let diamondArray = initializeGrid(num);
  let midpoint = Math.floor(num / 2);

  fillGrid(diamondArray, midpoint, num);


  printDiamond(diamondArray);
}

function initializeGrid(num) {
  let array = [];

  for (let index = 0; index < num; index += 1) {
    array.push([]);
    for (let secondIndex = 0; secondIndex < num; secondIndex += 1) {
      array[index].push(' ');
    }
  }
  return array;
}

function fillGrid(grid, midpoint, num) {

  for (let index = 0; index <= midpoint; index += 1) {
    for (let counter = midpoint - index; counter <= index + midpoint;
      counter += 1) {
      grid[index][counter] = '*';
      grid[num - (index + 1)][counter] = '*';
    }
  }

  return grid;
}

function printDiamond(grid) {
  for (let outerIndex = 0; outerIndex < grid.length; outerIndex += 1) {
    console.log(`${grid[outerIndex].join('')}\n`);
  }
}

diamond(1);
diamond(3);
diamond(5);
diamond(9);


function hollowDiamond(num) {
  let hollowDiamondArray = initializeGrid(num);
  let midpoint = Math.floor(num / 2);

  fillHollowGrid(hollowDiamondArray, midpoint, num);

  printDiamond(hollowDiamondArray);
}

function fillHollowGrid(grid, midpoint, num) {
  let counter = midpoint;

  for (let index = 0; index <= midpoint; index += 1) {
    grid[index][counter] = '*';
    grid[index][(index * 2) + counter] = '*';
    grid[num - (index + 1)][counter] = '*';
    grid[num - (index + 1)][(index * 2) + counter] = '*';
    counter -= 1;
  }
  return grid;
}
hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(5);
hollowDiamond(9);


//q3
function isBlockWord(word) {
  let wordArray = word.split('');
  let keys = ['B', 'X', 'D', 'C', 'N', 'G', 'R', 'F', 'J', 'H', 'V', 'L', 'Z' ];
  let values = ['O', 'K', 'Q', 'P', 'A', 'T', 'E', 'S', 'W', 'U', 'I', 'Y', 'M'];
  let resultArray = [];
  let index = 0;

  wordArray.forEach(elem => {
    if (keys.includes(elem.toUpperCase())) {
      index = keys.indexOf(elem.toUpperCase());
    } else {
      index = values.indexOf(elem.toUpperCase());
    }
    if (!resultArray.includes(index)) {
      resultArray.push(index);
    } else {
      resultArray.push('n');
    }
  });

  return !resultArray.includes('n');
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

*/
