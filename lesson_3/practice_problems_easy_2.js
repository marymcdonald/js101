//question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace(/['important']/g, 'urgent');

//question 2
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

/*one possible solution */
numbers = [1, 2, 3, 4, 5];
let newArray = numbers.slice(-1);

for (let index = -1; index > -1 * (numbers.length); index -= 1) {
  newArray.push(numbers.slice(index - 1, index));
}
console.log(newArray.flat());
console.log(numbers);

/*another possible solution*/

numbers = [1, 2, 3, 4, 5];
let numberStore = [];

numbers.forEach(number => (numberStore = [number, ...numberStore]));
console.log(numberStore);
console.log(numbers);

/*I misunderstood what was meant by the second sentence:
Write two distinct ways of reversing the array without mutating the original
array. Use reverse for the first solution, and sort for the second. */

//solution 1
numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray);
console.log(numbers);

//solution 2
numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);
console.log(numbers);

//bonus solution
numbers = [1, 2, 3, 4, 5];
let reverseArray = [];

numbers.forEach((number) => {
  reverseArray.unshift(number);
});

console.log(reverseArray);
console.log(numbers);

//question 3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

//question 4
let famousWords = "seven years ago...";
let str = "Four score and ";

console.log(str + famousWords);
console.log(str.concat('', famousWords));

//question 5
/*Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the
number at index 2, so that the array becomes [1, 2, 4, 5].*/
let array = [1, 2, 3, 4, 5];

array.splice(2, 1);
console.log(array);

//question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flintstonesFlat = flintstones.flat();
console.log(flintstonesFlat);

//alternative solutions
//using concat
console.log(flintstones.slice(0,2).concat(flintstones[2], flintstones[3]));

//using spread syntax and concat
flintstones = [].concat(...flintstones);
console.log(flintstones);

//with reduce
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

//with forEach
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

//question 7
let cast = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(cast)[2]);

//their solution
Object.entries(cast).filter(pair => pair[0] === "Barney").shift();

//question 8
let nums = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(nums));
console.log(Array.isArray(table));

//question 9
let title = "Flintstone Family Members";
let extra = Math.floor((40 - title.length) / 2);
let newTitle = title.padStart(extra + title.length, ' ');


console.log(newTitle);

//question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log([...statement1.matchAll('t')].length);

//their answer:
statement2.split('').filter(char => char === 't').length;
