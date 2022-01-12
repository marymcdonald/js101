//Q1
/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
    occurences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count
lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in
the input str.
*/

function decrypt(str) {
  let alphabetStr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let digitStr = '00000000000000000000000000'.split('');
  let letterCount = {};
  let strArray = str.split('');

  strArray.forEach(char => {
    if ((char >= 'a') && (char <= 'z')) {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  });

  for (let key in letterCount) {
    digitStr[alphabetStr.indexOf(key)] = letterCount[key];
  }
  return digitStr.join('');
}


//input: alphanumeric string
//output: string of digits, 26 in length

//rules:
//if it's a lowercase letter, keep a count of the number of occurences
//fill in where the letter should be in the string with the number of occurences
//ignore everything else (uppercase, symbols, numbers)
//empty string should return 26 0 string

//algorithm:
//initialize alphabet string
//initialize digit string, 26 in length (26 0's)
//initialize letter count object
//convert input string to array
// iterate through each char in string:
//  check if the char is between 'a' and 'z'
//  if it is, either initialize key-value of that letter (key: index of letter
//in alphabet string, value: 1)
//    or += 1 if key is defined
//  otherwise, char is not a lowercase letter, so continue loop

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');


//Q2
// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//-- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

function maxSequence(arr) {
  let totalSum = 0;
  let runningSum = 0;

  if (arr.length === 0) {
    return 0;
  } else if (arr.every(value => value < 0)) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  }

  arr.forEach(digit => {
    runningSum += digit;

    if (runningSum > totalSum) {
      totalSum = runningSum;
    } else if (runningSum < 0) {
      runningSum = 0;
    }

  });
  return totalSum;
}


//input: array of numbers
//output: number, maximum sum

//rules:
//if array only has negative numbers, return 0;
//empty will return 0;

//algorithm:
//initialize counter for total sum
//verify if array has no elements (return 0), only negative elements (return 0),
//or 1 element, (return that element)
//
//otherwise, iterate through all of the elements:
//take first element, add second – if this is less than the current sum
//  ignore and start sum at 0 again
//if this is greater than the current sum, add element to current sum
//return sum;

// Test Cases
console.log(maxSequence([]) === 0); // true
//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
//console.log(maxSequence([-32]));
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true