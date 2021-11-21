//q1

function sum(number, digit = 0, array = []) {

  digit = Math.floor(number % 10);
  array.push(digit);
  number /= 10;

  if (number > 10) {
    sum(number, digit, array);
  } else {
    digit = Math.floor(number % 10);
    array.push(digit);
  }
  return array.reduce((prev, current) => prev + current);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

//alternative answer:
function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}

//q2

function alphabeticNumberSort(arr) {
  let numbersWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let sortedWords = arr.slice()
    .map(element => numbersWords[element]).sort();

  return sortedWords.map(element => numbersWords.indexOf(element));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(alphabeticNumberSort([5, 7, 10, 19]));

//q3
function multiplyAllPairs(arr1, arr2) {
  let newArray = [];

  arr1.forEach(element => {
    newArray.push(arr2.map(element2 => element * element2));
  });
  return newArray.flat().sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

//q4

function leadingSubstrings(str) {
  let strArray = [];

  for (let index = 1; index <= str.length; index += 1) {
    strArray.push(str.slice(0, index));
  }
  return strArray.sort();
}

function leadingSubstrings(str) {
  let strArray = str.split('');
  let newArray = [];


  let returnArr = strArray.map(char => {
    newArray.push(char);
    return newArray.reduce((a,b) => a + b);
  });

  return returnArr;

}

function leadingSubstrings(str) {
  let arr = str.split('');
  let newArray = [];

  arr.reduce((a,b) => {
    a.push(b);
    newArray.push(a.join(''));
    return a;
  }, []);

  return newArray;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//q5
function substrings(str) {
  let arr = [];
  for (let ind = 0; ind < str.length; ind += 1) {
    arr = arr.concat(leadingSubstrings(str.slice(ind, str.length)));
  }
  return arr;
}

//array methods solution
function substrings(str) {
  let arr = str.split('');

  let newArray = arr.map((_, index) => str.slice(index).split());

  return newArray.map(element => leadingSubstrings(element[0])).flat();

}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

console.log(substrings('madam'));

//q6
function palindromes(str) {
  //console.log(substrings(str));
  return substrings(str).filter(word => {
    if (word.length > 1) {
      return word === word.split('').reverse().join('');
    }
    return false;
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

//q7

function sumOfSums(arrNumbers) {
  let sumArray = [];

  arrNumbers.reduce((prev, current) => {
    sumArray.push(prev + current);
    return prev + current;
  }, 0);

  return sumArray.reduce((a,b) => a + b);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

//other possibilities
function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

function sumOfSums(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}

//q8
function buyFruit(fruits) {
  let groceryList = [];
  fruits.forEach(subArray => {
    for (let index = 0; index < subArray[1]; index += 1) {
      groceryList.push(subArray[0]);
    }
  });
  return groceryList;
}

//alternative solution
function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

//q9
function transactionsFor(itemID, transactionsList) {
  return transactionsList.filter(transaction => transaction.id === itemID);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

//console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

//q10
function amount(available, movement) {
  return available.filter(element => element.movement === movement)
    .reduce((a, b) => a + b.quantity, 0);
}
function isItemAvailable(id, list) {
  let availableTransactions = transactionsFor(id, list);

  let positive = amount(availableTransactions, 'in');

  let negative = amount(availableTransactions, 'out');

  if (positive + (negative * (-1)) > 0) {
    return true;
  } else {
    return false;
  }
}

//alternative solution
function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      console.log(sum);
      console.log(transaction);
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}

let transactions2 = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions2));     // false
console.log(isItemAvailable(103, transactions2));     // false
console.log(isItemAvailable(105, transactions2));     // true