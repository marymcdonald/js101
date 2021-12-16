//q1
function repeater(str) {
  let arr = str.split('').map(char => char.repeat(2));
  return arr.join('');
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

//q2
function doubleConsonants(str) {
  let consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
  let arr = str.split('').map(char => {
    if (consonants.includes(char.toLowerCase())) {
      return char.repeat(2);
    } else {
      return char;
    }
  });
  return arr.join('');
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


//q3
function reverseNumber(num) {
  let str = num.toString();
  let newStr = '';

  for (let ind = str.length - 1; ind >= 0; ind -= 1) {
    if (str[ind] === '0') continue;
    newStr += str[ind];
  }

  return newStr;
}
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1


//q4
function centerOf(str) {
  let center = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[center - 1] + str[center];
  } else {
    return str[center];
  }
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

//q5
function negative(num) {
  return Math.abs(num) * -1;
}
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


//q6
function sequence(num) {
  let arr = [];
  for (let ind = 1; ind <= num; ind += 1) {
    arr.push(ind);
  }
  return arr;
}
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]


//q7
function swapName (str) {
  let name = str.split(' ');
  let lastName = name[name.length - 1];
  name.pop();

  return lastName + ', ' + name.join(' ');
}
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals')); // "Ragvals, Karl Oskar Henriksson"

//q8
function sequence(count, startingNum) {
  let arr = [];
  for (let ind = 1; ind <= count; ind += 1) {
    arr.push(ind * startingNum);
  }
  console.log(arr);
}
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []


//q9
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


//q10
function reverseWords(str) {
  let phrase = str.split(' ');

  let final = phrase.map(word => {
    if (word.length < 5) {
      return word;
    } else {
      return word.split('').reverse().join('');
    }
  });
  return final.join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


//q11
function reverse(arr) {
  let copy = arr.slice();

  for (let ind = 0; ind < arr.length; ind += 1) {
    arr[ind] = copy[arr.length - (ind + 1)];
  }
  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true


//q12
function isBalanced(str) {
  let parenthesesLeft = [];
  let parenthesesRight = [];
  let decision = true;

  str.split('').forEach((char, index) => {
    if (char ===  '(') {
      parenthesesLeft.push(index);
    } else if (char === ')') {
      parenthesesRight.push(index);
    }
  });

  if (parenthesesLeft.length !== parenthesesRight.length) {
    decision = false;
  } else {
    parenthesesLeft.forEach((elem, index) => {
      if (elem > parenthesesRight[index]) {
        decision = false;
      }
    });
  }
  return decision;

}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
