//q1
function letterPercentages(str) {
  let len = str.length;
  let propObj = {lowercase: 0, uppercase: 0, neither: 0};
  let arr = str.split('');

  arr.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      propObj['lowercase'] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      propObj['uppercase'] += 1;
    } else {
      propObj['neither'] += 1;
    }
  });

  for (let key in propObj) {
    propObj[key] = ((propObj[key] / len) * 100).toFixed(2);
  }

  return propObj;

}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

//q2

function triangle(s1, s2, s3) {
  let triangleType = '';
  let tArray = [s1, s2, s3];

  if (arguments.length !== 3) {
    return undefined;
  } else if (!((arguments[0] >= 0) && (arguments[1] >= 0) && (arguments[2] >= 0))) {
    return undefined;
  }

  let sortedArray = tArray.sort((a, b) => a - b);
  let sumOfFirstTwo = sortedArray[0] + sortedArray[1];

  if (sumOfFirstTwo < sortedArray[2]) {
    triangleType = 'invalid';
  } else if (sortedArray[0] === 0) {
    triangleType = 'invalid';
  }

  if (triangleType !== 'invalid') {
    if ((sumOfFirstTwo / 2) === sortedArray[2]) {
      triangleType = 'equilateral';
    } else if (
      (sortedArray[0] === sortedArray[1]) ||
      (sortedArray[1] === sortedArray[2])) {
      triangleType = 'isoceles';
    } else {
      triangleType = 'scalene';
    }
  }
  return triangleType;

}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(0,2));
console.log(triangle(2, 3, 'four'));

//q3

function triangle(a1, a2, a3) {
  let tArray = [a1, a2, a3];
  let triangleType = '';

  if (!isValid(tArray)) {
    return 'invalid';
  }

  if (tArray.includes(90)) {
    triangleType = 'right';
  } else {

    let isObtuse = tArray.find(num => num > 90);
    if (isObtuse !== undefined) {
      triangleType = 'obtuse';
    } else {
      triangleType = 'acute';
    }

  }

  return triangleType;
}

function isValid(arr) {
  let sum = arr.reduce((prev, current) => prev + current);

  if (sum < 180) {
    return false;
  } else if (arr.includes(0)) {
    return false;
  }

  return true;

}

console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"

//q4

function fridayThe13ths(year) {
  let thirteenCount = 0;

  for (let counter = 0; counter < 12; counter += 1) {
    let thirteenDate = new Date(year, counter, 13);
    if (thirteenDate.getDay() === 5) {
      thirteenCount += 1;
    }
  }
  return thirteenCount;
}


console.log(fridayThe13ths(1986));      // 1

console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2021));
console.log(fridayThe13ths(2022));


//q5

function featured(num) {
  let multiple = 0;
  const MAX_FEATURED = 9876543201;

  if (num >= MAX_FEATURED) {
    return "There is no possible number that fulfills those requirements.";
  } else if (num < 7) {
    return 7;
  }

  let remainder = Math.floor(num / 7);

  multiple = (remainder + 1) * 7;

  while (!isValidFeatured(multiple)) {
    multiple += 7;
  }

  return multiple;

}

function isValidFeatured(multiple) {
  if (multiple % 2 !== 1) {
    return false;
  }

  if (!uniqueDigits(multiple)) {
    return false;
  }

  return true;

}

function uniqueDigits(num) {
  let arr = String(num).split('');

  let sortedArr = arr.sort((a,b) => a - b);

  let counter = 0;
  let unique = true;
  while (counter < sortedArr.length) {
    if (sortedArr[counter] === sortedArr[counter + 1]) {
      unique = false;
      break;
    }
    counter += 1;
  }

  return unique;
}

console.log(featured(0));
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


//q6
function sumSquareDifference(num) {
  let sum = 0;
  let rollingSum = 0;

  if (num < 2) {
    return 0;
  }

  for (let index = 1; index <= num; index += 1) {
    sum += index;
    rollingSum += index ** 2;
  }
  return (sum ** 2) - rollingSum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

//q7
function bubbleSort(arr) {
  let sort = true;
  do {
    sort = true;
    for (let index = 0; index < arr.length - 1; index += 1) {
      if (arr[index] > arr[index + 1]) {
        let num = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = num;
        sort = false;
      }
    }

  } while (!sort);
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue",
"Tyler"]


//q8
// algorithm:
//break up text into words (on spaces)
//keep track of two indices: (start, finish)
//finish index is a word that includes ./!/?
//compare index differences, choose largest one
//extract longest sentence

function longestSentence(text) {
  let textArray = text.split(' ');
  let slidingIndex = [0,0];
  let sentenceIndices = [];
  let currentIndex = 1;

  textArray.forEach(word => {
    if (word.match(/(\.|\?|\!)/) !== null) {
      slidingIndex[currentIndex] = textArray.indexOf(word);
      sentenceIndices.push([slidingIndex[0], slidingIndex[1]]);
      slidingIndex = [slidingIndex[1] + 1, 0];
    }
  });

  let longest = findLargestDiff(sentenceIndices);
  console.log(`${printLongestSentence(longest, textArray)}`);
  console.log(`The longest sentence has ${(longest[1] + 1) - longest[0]} words.\n`);
}

function findLargestDiff(sentence) {
  let differences = sentence.map(index => index[1] - index[0]);
  let indexMaxDiff = differences.indexOf(Math.max(...differences));

  return sentence[indexMaxDiff];
}

function printLongestSentence(longest, textArray) {
  let finalSentence = [];
  for (let index = longest[0]; index < longest[1] + 1; index += 1) {
    finalSentence.push(textArray[index]);
  }
  return finalSentence.join(' ');
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

