
//q1
function rotateArray(arr) {
  let copyArray = [];
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length !== 0) {
    copyArray = arr.slice(1);
    copyArray.push(arr[0]);
  }

  return copyArray;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []


// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


//q2
function rotateRightmostDigits(num, rotation) {
  let strNum = String(num);

  let keepString = strNum.slice(0, strNum.length - rotation);
  let removedDigits = strNum.slice(strNum.length - rotation).split('');

  keepString += rotateArray(removedDigits).join('');
  return Number(keepString);
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


//q3
function maxRotation(num) {
  let copyNum = String(num).split('');
  let counter = copyNum.length;
  let rotatedNum = 0;
  rotatedNum = rotateArray(copyNum).join('');
  counter -= 1;

  while (counter > 1) {
    rotatedNum = rotateRightmostDigits(rotatedNum, counter);
    counter -= 1;
  }

  return Number(rotatedNum);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(8703529146));      // 7321609845
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets
dropped


//q4

function minilang(program) {
  let commands = program.split(' ');
  let register = 0;
  let stack = [];
  let validOperations = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER',
  'POP', 'PRINT'];


  commands.forEach(operation => {
    if (operation.match(/[0-9]/)) {
      register = Number(operation);
    } else if (!validOperations.includes(operation)) {
      print(`${program} is not a valid program.`);
    } else if (!['PUSH', 'PRINT'].includes(operation) && stack.length === 0) {
      print(`Operation ${program} cannot be completed on an empty stack`);
    } else {
      [register, stack] = pickOperation(operation, register, stack);
    }

  });

  return undefined;
}
function pickOperation(program, register, stack) {
  switch (program) {
    case 'PRINT':
      print(register);
      break;
    case 'PUSH':
      stack.push(register);
      break;
    case 'POP':
      register = stack.pop();
      break;
    default:
      [register, stack] = mathOperations(program, register, stack);
      break;
  }
  return [register, stack];
}

function mathOperations(program, register, stack) {
  switch (program) {
    case 'ADD':
      register += stack.pop();
      break;
    case 'SUB':
      register -= stack.pop();
      break;
    case 'MULT':
      register *= stack.pop();
      break;
    case 'DIV':
      register = Math.floor(register / stack.pop());
      break;
    case 'REMAINDER':
      register = Math.floor(register % stack.pop());
      break;
  }
  return [register, stack];
}

function print(value) {
  console.log(value);
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8


minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('7 EAT');
minilang('8 ADD');


//q5
function wordToDigit(str) {
  let digitObj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
    seven: 7, eight: 8, nine: 9};

  let strArray = str.split(' ');

  let digitArray = strArray.map(word => {
    let noPunctuation = word.match(/[a-z]/g);
    let punctuation = word.match(/[^a-z]/g);

    if (Object.keys(digitObj).includes(noPunctuation.join(''))) {
      return digitObj[noPunctuation.join('')] + punctuation;
    }
    return word;
  });

  return digitArray.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


//q6
function fibonacci(num) {
  let result = 1;
  if (num >= 3) {
    result = fibonacci(num - 2) + fibonacci(num - 1);
  }
  return result;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765


//q7
function fibonacci(nth) {
  let array = [1, 1];
  let fibn = array[0];

  for (let index = 2; index < nth; index += 1) {
    fibn = array[index - 1] + array[index - 2];
    array.push(fibn);
  }

  return fibn;
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

console.log(fibonacci(20));       // 6765

console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050


//q8
let memoFib = [1, 1];
function fibonacci(nth) {
  if (nth <= 2) {
    return memoFib[0];
  } else if (memoFib[nth - 1]) {
    return memoFib[nth - 1];
  } else {
    memoFib[nth - 1]  = fibonacci(nth - 1) + fibonacci(nth - 2);
  }
  return memoFib[nth - 1];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));

console.log(fibonacci(4));
console.log(fibonacci(5));

console.log(fibonacci(20));
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
