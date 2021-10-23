//question 1
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

//hmmm..the only difference I see is that the second function has an extra
//space (newline char) after return. I don't see why this would matter...
//I'm going to say there's no difference between the two.

//running the program, there is a difference. The second function displays
//'undefined', but I really don't understand why.

//answer:
//The reason for this odd behavior is that semicolons, in JavaScript, are
//technically optional. However, when you omit them, the JavaScript engine
//inserts them where it thinks you need them. In second, it inserts a semicolon
//after the word return, so the function returns undefined. No errors are
//thrown since the rest of the code is valid, even though it never gets
//executed.

//question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

//this should print out
// "{first: [1, 2]}"

//question 3
//part A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//messWithVars(["one"], ["two"], ["three"])
//it will print:
//one is ["two"]
//two is ["three"]
//three is ["two"] 

//answer:
//one is: one, two is: two, three is: three
//Local variables are reassigned, but
//the global variables still point to their original objects


//part B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//it will print:
//one is ["two"]
//two is ["three"]
//three is ["one"]

//answer: 
// one is: one, two is: two, three is: three
//only the local variables have been reassigned
//the global variables remain unchanged

//part C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//it will print:
//one is ["two"]
//two is ["three"]
//three is ["one"]

//answer:
//this is correct because we are calling the method .splice()
//which mutates the original array

//question 4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));

