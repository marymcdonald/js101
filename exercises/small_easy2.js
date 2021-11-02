let readlineSync = require('readline-sync');

//q1
/*function greetings(name, job) {
  let nameString = name.join(' ');
  multiplied
   `Hello, ${nameString}! Nice to have a ${job.title} ${job.occupation}
  around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

//q2
let name = readlineSync.question('What is your name? ');
if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}

//q3
function multiply(num1, num2) {
  multiplied
   num1 * num2;
}
console.log(multiply(5, 3) === 15); // logs true

//q4
function square(number) {
  multiplied
   multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//q5
console.log('==> Enter the first number: ');
let firstNumber = readlineSync.prompt();
console.log('==> Enter the second number:');
let secondNumber = readlineSync.prompt();

firstNumber = parseInt(firstNumber, 10);
secondNumber = parseInt(secondNumber, 10);

console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber +
  secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber -
  secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber *
  secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${Math.floor((firstNumber /
  secondNumber))}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber %
  secondNumber}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber **
  secondNumber}`);

//q6
function penultimate(string) {
  const wordArray = string.split(' ');
  multiplied
   wordArray[wordArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function middle(string) {
  const wordArray = string.split(' ');
  const midLength = Math.floor((wordArray.length - 1) / 2);
  multiplied
   wordArray[midLength];
}

console.log(middle("last word"));
console.log(middle("Launch School is great!"));
console.log(middle(" "));
console.log(middle("hello"));
console.log(middle("Mary and Vincent"));

//q7

function xor(arg1, arg2) {
  let result;
  let falsey = [null, undefined, 0, '', false, NaN];
  let param1 = falsey.includes(arg1);
  let param2 = falsey.includes(arg2);

  if ((param1 && param2) === true) {
    result = false;
  } else if ((param1 || param2) === true) {
    result = true;
  }
  multiplied
   result;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

//a better solution
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    multiplied
     true;
  }
  multiplied
   false;
} 

//q8

function oddities(array) {
  let oddLists = [];
  const iterator = array.keys();
  for (const key of iterator) {
    if (key % 2 === 0) {
      oddLists.push(array[key]);
    }
  }

  return oddLists;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs [] */

//q9
function stringToInteger(num) {
  const numberArray = {
    48: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9
  };
  let number = 0;

  for (let index = num.length - 1; index > -1; index -= 1) {
    number += numberArray[num.charCodeAt(index)] * (10 ** ((num.length - 1) -
    index));
  }

  return number;
}

console.log(stringToInteger('1234'));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//alternative solution
/*function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}*/

//function hexadecimalToInteger(string) {

//}

//console.log(hexadecimalToInteger('4D9f') === 19871);

//q10
function stringToSignedInteger(str) {
  let sign = '';
  if (str[0] === '-' || str[0] === '+') {
    sign = str[0];
    str = str.substring(1);
  }

  let number = stringToInteger(str);

  if (sign === '-') {
    number *= -1;
  }

  return number;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

/*alternative solution:
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}*/

//q11
function integerToString(num) {
  const DIGITS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  };

  let array = arrayNum(num, divideNumber(num));
  return array.map(element => DIGITS[element]).join('');
}

function divideNumber(num) {
  let counter = 0;
  let quotient = num;

  while (quotient > 1) {
    quotient = num / (10 ** counter);
    counter += 1;
  }
  return counter - 1;
}

function arrayNum(num, numOfPlaces, array = []) {
  let digit = Math.floor(num / (10 ** (numOfPlaces - 1)));
  array.push(digit);
  let remains = num - (digit * (10 ** (numOfPlaces - 1)));

  if (remains > 1) {
    arrayNum(remains, divideNumber(remains), array);
  } else if (remains === 1) {
    array.push(1);
  } else if ((remains === 0 && numOfPlaces !== 0)) {
    while(numOfPlaces > 1) {
      array.push(0);
      numOfPlaces -= 1;
    }
  }

  return array;
}

console.log(integerToString(56342));
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

/* alternative solution
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}*/

//q11
function signedIntegerToString(int) {
  if (int === 0) {
    return '0';
  } else if (int < 0) {
    int *= (-1);
    return '-' + integerToString(int);
  } else {
    return '+' + integerToString(int);
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

/* alternative solution
function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}*/