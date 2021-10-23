//question 1
let numbers = [1, 2, 3];
numbers[6] = 5;

//no, this won't raise an error. I think the array will look like this:
//[1, 2, 3, , , , 5]

//answer: correct, except the array will look like
//[ 1, 2, 3, <3 empty items>, 5 ]

//question 2
let numbers1 = [1, 2, 3];
numbers1[6] = 5;
numbers1[4];  // what will this line return?

//I think this should return undefined.
//answer: correct, numbers[4] will output undefined, but the slot is empty --
//it doesn't have a value, not even undefined, in spite of what the line
//returns.

//question 3
let str0 = "Come over here!"; // true
let str00 = "What's up, Doc?"; // false

function endExclamationMark(str) {
  return str[str.length - 1] === '!';
}

console.log(endExclamationMark(str0));
console.log(endExclamationMark(str00));

//answer: use the endsWith method
//str1.endsWith("!"); // true
//str2.endsWith("!"); // false

//question 4
let ages1 = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages1.hasOwnProperty('Spot'); //should be false;

//question 5
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newString = munstersDescription.toLowerCase();
newString[0] = newString[0].toUpperCase();

//answer:
//munstersDescription.charAt(0).toUpperCase() +
//munstersDescription.substring(1).toLowerCase();

//question 5
console.log(false == '0');
console.log(false === '0');

//the first should output 'true', the second 'false

//question 6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages,additionalAges);
console.log(ages);

//question 7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

//question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);

//question 9
let flintstonesz = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstonesz.push("Dino", "Hoppy");
console.log(flintstonesz);

//question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.slice(0, advice.indexOf('house')));