let readline = require('readline-sync');

/*//q1
function crunch(str) {
  let arr = str.split('');

  return arr.reduce((prev, current) => {
    if (prev[prev.length - 1] === current) {
      return prev;
    } else {
      prev.push(current);
      return prev;
    }
  }, []);

}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


//q2
function logInBox(str) {
  let start = '';
  let middleText = '';
  let returnText = `+-${start}-+\n| ${middleText} |\n| ${middleText} |\n+-${start}-+`;

  if (str.length === 0) {
    return returnText;
  } else {
    for (let index = 0; index < str.length; index += 1) {
      start += '-';
      middleText += ' ';
    }

    returnText = `+-${start}-+\n| ${middleText} |\n| ${str} |\n| ${middleText} |\n+-${start}-+`;
  }

  return returnText;

}
*/

//console.log(logInBox('mary'));

//console.log(logInBox('To boldly go where no one has gone before.'));
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+*/
//console.log(logInBox(''));
/*
+--+
|  |
|  |
|  |
+--+

//q3
function stringy(number) {
  let strBinary = '10'.repeat(Math.floor(number / 2));

  if (number % 2 === 1) {
    strBinary += '1';
  }

  return strBinary;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


//q4

function findFibonacciIndexByLength(number) {
  let sum = [1n, 1n];
  let counter = 0n;

  while (String(sum[sum.length - 1]).length < String(number)) {
    sum.push(sum[counter] + sum[counter + 1n]);
    counter += 1n;
  }

  return BigInt(sum.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.


//q5
function triangle(number) {
  let returnString = '';

  for (let index = 1; index <= number; index += 1) {
    returnString += ' '.repeat(number - index) + '*'.repeat(number - (number - index)) + '\n';
  }
  console.log(returnString);
}

triangle(5);

//    *
//   **
//  ***
// ****
//*****


triangle(9);


//q6
function prompt(str) {
  return console.log(`=> ${str}`);
}
function madLibs() {
  prompt('Enter a noun: ');
  let noun = readline.prompt();
  prompt('Enter a verb: ');
  let verb = readline.prompt();
  prompt('Enter an adjective: ');
  let adj = readline.prompt();
  prompt('Enter an adverb: ');
  let adv = readline.prompt();


  let text = `Do you walk your ${adj} ${noun} ${adv}? That's hilarious!\nThe ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.\nThe ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`;

  console.log(text);

}

madLibs();
//Enter a noun: dog
//Enter a verb: walk
//Enter an adjective: blue
//Enter an adverb: quickly

// console output
//Do you walk your blue dog quickly? That's hilarious!
//The blue dog walks quickly over the lazy dog.
//The dog quickly walks up blue Joe's turtle.

//q7
function twice(num) {
  let strNum = String(num);
  let length = strNum.length;

  let split1 = strNum.substring(0, Math.floor(length / 2));
  let split2 = strNum.substring(Math.floor(length / 2), length);

  if (split1 !== split2) {
    return num * 2;
  } else {
    return num;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


//q8
function getGrade(num1, num2, num3) {
  let grades = {
    A: [90, 100],
    B: [80, 90],
    C: [70, 80],
    D: [60, 70],
    F: [0, 60]
  };
  let average = (num1 + num2 + num3) / 3;
  let finalGrade = 'A';

  Object.entries(grades).forEach(arr => {
    if (arr[1][0] <= average && average < arr[1][1]) {
      finalGrade = arr[0];
    }
  });
  console.log(finalGrade);
  return finalGrade;
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"


//q9
function cleanUp(str) {
  let cleanedSentence = '';

  for (let index = 0; index < str.length; index += 1) {

    if (65 <= str.charCodeAt(index) && str.charCodeAt(index) <= 90) {
      cleanedSentence += str[index];
    } else if (97 <= str.charCodeAt(index) && str.charCodeAt(index) <= 122) {
      cleanedSentence += str[index];
    } else if (cleanedSentence[cleanedSentence.length - 1] === ' ') {
      continue;
    } else {
      cleanedSentence += ' ';
    }
  }

  console.log(cleanedSentence);
  return cleanedSentence;
}

//cleanUp("---w");
cleanUp("---what's my +*& line?");    // " what s my line "
*/

//q10
function yearEnding(strCentury) {
  let number = Number(strCentury);
  let obj = {
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  if (strCentury.length > 2) {
    number %= (10 ** (strCentury.length - 1));
  }

  if (number < 4) {
    strCentury += obj[number];
  } else if (number > 20 && strCentury[strCentury.length - 1]) {
    strCentury += obj[strCentury[strCentury.length - 1]];
  } else {
    strCentury += 'th';
  }

  return strCentury;
}

function century(year) {
  let strCentury = 0;
  let arr = [];
  let strYear = String(year);

  if (strYear.length > 3) {
    arr[0] = strYear.slice(0, Math.round(strYear.length / 2));
    arr[1] = strYear.slice(Math.round(strYear.length / 2));

  } else if (strYear.length === 3) {
    arr[0] = strYear.slice(0, 1);
    arr[1] = strYear.slice(1);
  } else {
    return '1st';
  }

  strCentury = Number(arr[0]);

  if (arr[1].slice(arr[1].length - 1) !== '0') {
    strCentury += 1;
  }
  return yearEnding(String(strCentury));
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"