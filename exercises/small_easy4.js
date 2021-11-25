/*let readline = require('readline-sync');

//q1
function age() {
  let age = Math.floor((Math.random() * (120 - 20 + 1)) + 20);

  return console.log(`Teddy is ${age} years old!`);
}

age();
age();
age();
//Teddy is 69 years old!


//q2

function amongNumbers() {
  let arr = [];

  console.log(`Enter the 1st number: `);
  arr.push(readline.prompt());

  console.log('Enter the 2nd number: ');
  arr.push(readline.prompt());

  console.log('Enter the 3rd number: ');
  arr.push(readline.prompt());

  console.log('Enter the 4th number: ');
  arr.push(readline.prompt());

  console.log('Enter the 5th number: ');
  arr.push(readline.prompt());

  console.log('Enter the 6th number: ');
  let lastNum = readline.prompt();

  if (arr.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${arr.join(',')}.`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${arr.join(',')}.`);
  }
}

amongNumbers();


//q3
function retirement() {
  console.log('What is your age? ');
  let currentAge = readline.prompt();

  console.log('At what age would you like to retire? ');
  let retirementAge = readline.prompt();

  let diff = Number(retirementAge) - Number(currentAge);

  console.log(`It's 2021. You will retire in ${2021 + diff}`);
  console.log(`You have only ${diff} years of work to go!`);
}

retirement();

//you can use the Date object instead of hard-coding the year:
//let today = new Date();
//let currentYear = today.getFullYear();

//q4
function isPalindrome(str) {
  let arr = [];
  let newStr = str;
  if (str.includes(' ')) {
    newStr = str.replace(/ /g, '');
  }
  arr = newStr.split('');

  return newStr === arr.reverse().join('');

}
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
isPalindrome("madam im adam");       //true

//q5
function isRealPalindrome(str) {
  let copy = str.slice().toLowerCase();

  let regex = /([a-z]|[0-9])/g;
  let reduced = String(copy.match(regex));
  return isPalindrome(reduced);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

//q6
function isPalindromicNumber(number) {
  let strNum = String(number);

  return isPalindrome(strNum);
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


//q7
function runningTotal(arr) {
  let arrRunTotal = arr.reduce((prev, current) => {
    prev.push(prev[prev.length - 1] + current);
    return prev;
  }, [0]);
  arrRunTotal.shift();

  return arrRunTotal;
}


function runningTotal(arr) {
  let sum = 0;
  let arrRunTotal = arr.map(element => {
    sum += element;
    return sum;
  });

  return arrRunTotal;
}
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


//q8
function wordSizes(str) {
  let obj = {};
  if (str === '') {
    return obj;
  }
  let arr = str.split(' ');
  let arrLength = arr.map(elem => elem.length);

  arrLength.forEach(element => {
    if (obj[element] === undefined) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });
  return obj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}


//q9
function wordSizes(str) {
  let obj = {};
  if (str === '') {
    return obj;
  }
  let arr = str.split(' ');
  let newStr = '';
  let arrLength = arr.map(elem => {
    newStr = elem.replace(/[^a-zA-Z]/g, '');
    return newStr.length;
  });

  arrLength.forEach(element => {
    if (obj[element] === undefined) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });
  return obj;
}
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}


//q10
function swap(str) {
  let arr = str.split(' ');

  arr.forEach((element, index) => {
    arr[index] =
    swapFirstAndLast(element, element[0], element[element.length - 1]);
  });

  return arr.join(' ');
}
*/
//alternative solution to above function
function swap(str) {
  let arr = str.split(' ');

  let newArr = arr.map(element =>
    swapFirstAndLast(element, element[0], element[element.length - 1]));

  return newArr.join(' ');
}

function swapFirstAndLast(word, first, last) {
  let copy = word.split('');
  copy[0] = last;
  copy[copy.length - 1] = first;

  return copy.join('');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"