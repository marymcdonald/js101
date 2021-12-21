//q1
function isUppercase(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let counter = 0;

  while (counter < str.length) {
    if (alphabet.includes(str[counter])) {
      break;
    } else {
      counter += 1;
    }
  }
  if (counter === str.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


//q2
function removeVowels(strings) {
  let vowels = 'aeiou'.split('');
  let noVowels = [];

  strings.forEach(word => {
    let words = word.split('').reduce((prev, current) => {
      if (!vowels.includes(current.toLowerCase())) {
        prev.push(current);
      }
      return prev;
    }, []);
    noVowels.push(words.join(''));
  });
  return noVowels;
}

removeVowels(['abcde']);
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


//q3
function letterCaseCount(str) {
  let wordObj = {lowercase: 0, uppercase:0, neither:0};
  let lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  str.split('').forEach(char => {
    if (lower.includes(char)) {
      wordObj.lowercase += 1;
    } else if (upper.includes(char)) {
      wordObj.uppercase += 1;
    } else {
      wordObj.neither += 1;
    }
  });
  return wordObj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


//q4
function wordCap(str) {
  let words = str.split(' ');

  let newArray = words.map(chars => {
    return chars.slice(0,1).toUpperCase() + chars.slice(1);
  });

  return newArray.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

//q5
function swapCase(str) {
  let swapped = str.split('').map(char => {
    if ((char >= 'a') && (char <= 'z')) {
      return char.toUpperCase();
    } else if ((char >= 'A') && (char <= 'Z')) {
      return char.toLowerCase();
    } else {
      return char;
    }
  });
  return swapped.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


//q6
function staggeredCase(str) {
  let status = 'upper';

  let arr = str.split('').map(char => {
    if (status === 'upper') {
      status = 'lower';
      return char.toUpperCase();
    } else {
      status = 'upper';
      return char.toLowerCase();
    }
  });

  return arr.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"



//q7

function staggeredCase(str) {
  let status = 'upper';
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let arr = str.split('').map(char => {
    if (letters.includes(char.toLowerCase())) {
      if (status === 'upper') {
        status = 'lower';
        return char.toUpperCase();
      } else {
        status = 'upper';
        return char.toLowerCase();
      }
    }
    return char;
  });

  return arr.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


//q8
function wordLengths(str) {
  let arr = [];

  if (str) {
    str.split(' ').map(word => arr.push(`${word} ${word.length}`));
  }

  return arr;
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []


//q9

function searchWord(word, text) {
  let textArray = text.split(' ');
  let count = 0;

  textArray.forEach(elem => {
    if (elem.toLowerCase() === word) {
      count += 1;
    }
  });
  console.log(count);
  return count;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
searchWord('qui', text);      // 4


//q10
function searchWord(word, text) {

  let textArray = text.split(' ').map(elem => {
    if (elem.toLowerCase() === word) {
      return `**${elem.toUpperCase()}**`;
    }
    return elem;
  });
  return textArray.join(' ');
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"