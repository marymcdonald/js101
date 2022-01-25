/*
//q1
function madlibs(template) {
  let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
  let types = ['adj', 'noun', 'verb', 'adverb'];

  let words = template.split(' ');


  let sentence = words.map(word => {
    switch (word) {
      case 'adj':
        return (generateRandomWord(adjectives));
      case 'noun':
        return generateRandomWord(nouns);
      case 'verb':
        return generateRandomWord(verbs);
      case 'adverb':
        return generateRandomWord(adverbs);
      default:
        return word;
    }
  });

  return sentence.join(' ');

}

function generateRandomWord(wordType) {
  return wordType[Math.floor(Math.random()*wordType.length)];
}

/*
// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------
*/
/*
let template1 = `The adj brown noun adverb verb the adj yellow noun `
+`, who adverb verb his noun and looks around.`;
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

let template2 = 'The noun verb the noun ' +'\'s noun ' +'.';

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".


//q2
function transpose(matrix) {
  let transposedMatrix = [[], [], []];
  for (let index = 0; index < matrix.length; index += 1) {
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex += 1) {
      transposedMatrix[index].push(matrix[subIndex][index]);
    }
  }
  return transposedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

//let newMatrix = transpose(matrix);

//console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
//console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transposeInPlace(matrix) {
  for (let index = 0; index < 3; index += 1) {
    for (let subIndex = 0; subIndex < 3; subIndex += 1) {
      [matrix[index][subIndex], matrix[subIndex][index]] =
      [matrix[subIndex][index], matrix[index][subIndex]];
    }
  }
  return matrix;
}

console.log(transposeInPlace(matrix));
console.log(matrix);

//q3
function transpose(matrix) {
  let transposedMatrix = [];

  for (let index = 0; index < matrix[0].length; index += 1) {
    transposedMatrix.push([]);
    for (let subIndex = 0; subIndex < matrix.length; subIndex += 1) {
      transposedMatrix[index].push(matrix[subIndex][index]);
    }
  }
  return transposedMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


//q4
function rotate90(matrix) {
  let rotatedMatrix = [];

  for (let rowIndex = 0; rowIndex < matrix[0].length; rowIndex += 1) {
    rotatedMatrix.push([]);
    for (let colIndex = matrix.length - 1; colIndex >= 0; colIndex -= 1) {
      rotatedMatrix[rowIndex].push(matrix[colIndex][rowIndex]);
    }
  }
  return rotatedMatrix;
}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
*/

//q5
/* only works with numbers :(
function merge(arr1, arr2) {
  let indices = [0,0];
  let mergedArray = [];

  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  while (indices[0] < arr1.length && indices[1] < arr2.length) {
    let smaller = Math.min(arr1[indices[0]], arr2[indices[1]]);
    mergedArray.push(smaller);
    if (arr1.includes(smaller)) {
      indices[0] += 1;
    } else {
      indices[1] += 1;
    }
  }

  if (indices[0] < arr1.length) {
    for (let index = indices[0]; index < arr1.length; index += 1) {
      mergedArray.push(arr1[index]);
    }
  } else {
    for (let index = indices[1]; index < arr2.length; index += 1) {
      mergedArray.push(arr2[index]);
    }
  }

  return mergedArray;
}


function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let mergedArray = [];

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] < copy2[0]) {
      mergedArray.push(copy1.splice(0,1)[0]);
    } else {
      mergedArray.push(copy2.splice(0,1)[0]);
    }
  }


  if (copy1.length > 0) {
    mergedArray = mergedArray.concat(copy1);
  } else {
    mergedArray = mergedArray.concat(copy2);
  }
  return mergedArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1,2,3,4], [5,6,7,8]));
console.log(merge([5,6,7,8], [1,2,3,4]));


//q6

function mergeSort(array) {
  let splitArray = [];
  let counter = 0;
  array.forEach((elem, index) => {
    if (index % 2 === 0) {
      splitArray[counter] = [elem];
    } else {
      splitArray[counter].push(elem);
      counter += 1;
    }
  });
  let sortedArray = splitArray.map(elem => elem.map(value => [value]));

  sortedArray = sortedArray.map(elem => {
    return elem.reduce((prev, current) => merge(prev, current));
  });

  while (sortedArray.length < array.length) {
    sortedArray = sortedArray.reduce((prev, current) => merge(prev, current));
  }

  return sortedArray;
}


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]

console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22]));

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
*/
//q7
function binarySearch(array, searchItem) {
  let testArray = array.slice();
  let midPoint = Math.floor((testArray.length) / 2);
  let counter = 0;
  let found = false;

  while (testArray.length > 0) {
    if (testArray[midPoint] === searchItem) {
      counter += midPoint;
      found = true;
      break;
    } else if (testArray[midPoint] < searchItem) {
      testArray = testArray.slice(midPoint + 1);
      counter += midPoint + 1;
    } else if (testArray[midPoint] > searchItem) {
      testArray = testArray.slice(0, midPoint);
    }
    midPoint = Math.floor((testArray.length) / 2);
  }

  if (!found) {
    counter = -1;
  }

  return counter;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

