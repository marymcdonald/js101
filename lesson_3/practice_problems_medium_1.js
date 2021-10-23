//question 1
//write a program that outputs The Flintstones Rock! 10 times, with each line
//indented 1 space to the right of the line above it.

function ASCIIArt(string) {
  let space = '';
  for (let index = 1; index < 11; index += 1) {
    console.log(space + string);
    space += ' ';
  }
}

ASCIIArt('The Flintstones Rock!');

//question 2
let munstersDescription = "The Munsters are creepy and spooky.";
let newString = '';

for (const letter of munstersDescription) {
  if (letter.toUpperCase() === letter) {
    newString += letter.toLowerCase();
  } else {
    newString += letter.toUpperCase();
  }
}

console.log(newString);

//question 3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

factors(9);
//extra question: What is the purpose of number % divisor === 0 in that code?
//if number is divided evenly by divisor (has a remainder of 0), then divisor
//is a factor of number.

//question 4
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//the first function modifies 'buffer' each time, while the second function
//creates a new array and has 'buffer' point to it.

//answer: Yes, there is a difference. While both methods have the same return
//value, the first implementation mutates the argument represented by buffer.
//That is, the caller will see that the array is different when the function
//returns. The rollingBuffer2 implementation doesn't mutate the argument
//specified by the value of buffer.

//question 5
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

//I think this should print:
// 0.9
// true

//answer: incorrect
//0.8999999999999999
//false
//JavaScript uses floating point numbers for all numeric operations. Most
//floating point representations used on computers lack a certain amount of
//precision, and that can yield unexpected results like these.

//question 6
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//false
//since even NaN === NaN is false

//extra question: How can you reliably test if a value is NaN?
//use .isNaN or Number.isNaN

//extra explanation:
//NaN -- not a number -- is a special numeric value that indicates that an
//operation that was intended to return a number failed. JavaScript doesn't let
//you use == and === to determine whether a value is NaN.

//question 7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

//this should output 34.

//question 8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters);

//this should change all of the objects and their values

//answer: yes
//In JavaScript, objects are passed by reference. Thus, Spot's demoObject
//starts off pointing to the munsters object. His program could replace that
//with some other object, and the family's data would be safe. However, in this
//case, the program doesn't reassign demoObject; it just uses it, as-is. Thus,
//the object that gets changed by the function is the munsters object.

//question 9

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//this should output:
//paper


//question 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

//I think it should return 'yes'

//answer: 
//This is because the value returned from the foo function will always be "yes"
//and "yes" === "no" will be false.