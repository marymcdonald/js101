//question 1
let numbers = [1, 2, 3, 4];
let total = numbers.length;

for (let ind = 0; ind < total; ind += 1) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
total = numbers.length;
for (let num = 0; num < total; num += 1) {
  numbers.shift();
}
console.log(numbers);

//other possible answers
numbers.length = 0;

while (numbers.length) {
  numbers.pop();
}

//question 2
console.log([1, 2, 3] + [4, 5]);

/*I think this should return '1, 2, 3, 4, 5' (a string)*/

//answer: 1,2,34,5 <- no comma between 3 and 4

//question 3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/* this will output 'hello there'. Nothing about str1 has changed.*/

//answer: correct.
// more details: line 2 assigns str2 a new string that happens to be a copy of
//str1's value. Line 3, in turn, assigns str2 to an entirely new string.

//question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/* will return [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
because .slice returns a copy of the array, so changing any values in arr2
will have no effect on arr1*/

//answer: incorrect. it will output:
//[ { first: 42 }, { second: "value2" }, 3, 4, 5 ]
//.slice() makes shallow copies and shallow copies only make duplicates of the
//outermost values in the array or object.

//question 5
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//The following function unnecessarily uses two return statements to return
//boolean values. Can you rewrite this function so it only has one return
//statement and does not explicitly use either true or false?

//solution 1
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

//function 2
function isColorValid(color) {
  let colorArray = ['blue', 'green'];

  return colorArray.includes(color);
}

//other answers: 
const isColorValid = color => color === "blue" || color === "green";
const isColorValid = color => ["blue", "green"].includes(color);