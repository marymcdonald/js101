let readline = require('readline-sync');

//q1
function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

//input: integer
//output: boolean
//explicit: returns true if abs(num) is odd

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//q2

for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 0) continue;
  console.log(num);
}

//q3

for (let num = 2; num < 100; num += 2) {
  console.log(num);
}

//q4


let length;
let width;
let areaMeters;
let areaFeet;
let reply;
const SQMETERS_TO_SQFEET = 10.7639;

while (true) {
  console.log('Enter the length of the room in meters');
  length = readline.prompt();
  length = parseInt(length, 10);
  console.log(length);

  console.log('Enter the width of the room in meters');
  width = readline.prompt();
  width = parseInt(length, 10);
  console.log(width);

  areaMeters = (length * width).toFixed(2);
  areaFeet = (areaMeters * SQMETERS_TO_SQFEET).toFixed(2);
  console.log(`The area of the room is ${areaMeters} square meters (${areaFeet}
    square feet).`);

  console.log('Would you like to calculate the area of another room? y/n');
  reply = readline.prompt();

  if (reply === 'n') break;
}

//q5
let billAmount = readline.question('How much is the bill? ');
billAmount = parseFloat(billAmount);
let tipPercentage = readline.question('What is the tip percentage? ');
tipPercentage = parseFloat(tipPercentage);
let tip = (billAmount * tipPercentage) / 100;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(tip + billAmount).toFixed(2)}`);

//q6

console.log('Please enter an integer greater than 0: ');
let integer = readline.prompt();
integer = parseInt(integer, 10);
console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let action = readline.prompt();

let array = [];
for (let index = 1; index < (integer + 1); index += 1) {
  array.push(index);
}

let result;
if (action === 's') {
  result = array.reduce((a, b) => a + b);
  console.log(`The sum of the integers between 1 and ${integer} is ${result}`);
} else {
  result = array.reduce((a, b) => a * b);
  console.log(`The product of the integers between 1 and ${integer} is ${result}
  `);
}

//q7

function shortLongShort(str1, str2) {
  let result = '';
  if (str1.length < str2.length) {
    result = str1 + str2 + str1;
  } else if (str2.length < str1.length) {
    result = str2 + str1 + str2;
  } //else... if they are the same size?
  return result;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

//q8
function isLeapYear(year) {
  let divideByFour = year % 4;
  let divideByAHundred = year % 100;
  let divideByFourHundred = year % 400;
  let result;

  if (divideByFour === 0 && divideByAHundred !== 0) {
    result = true;
  } else if (divideByFour === 0 && divideByAHundred === 0 &&
    divideByFourHundred === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

//q9
function isLeapYear(year) {
  let result = false;
  if (year < 1752) {
    if (year % 4 === 0) {
      result = true;
    }
  } else if (year % 400 === 0) {
    result = true;
  } else if ((year % 100 !== 0) && year % 4 === 0) {
    result = true;
  }
  return result;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

//q10
function multisum(number) {
  let numArray = [];
  for (let threes = 3; threes < number; threes += 3) {
    numArray.push(threes);
  }

  for (let fives = 5; fives < number; fives += 5) {
    if ((fives % 3 === 0)) continue;
    numArray.push(fives);
  }
  numArray.push(number);
  return numArray.reduce((a,b) => a + b);
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));

//q11

function utf16Value(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }
  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811