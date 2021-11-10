//q1
let arr = ['10', '11', '9', '7', '8'];

arr.sort((a,b) => Number(b) - Number(a));
console.log(arr);

//q2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez',
  published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'
  },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));
console.log(books);

//q3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g',
'h', 'i'] }];
console.log(arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]);

//q4
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
console.log(obj2);

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sum = Object.entries(munsters).reduce((previous, current) => {
  if (current[1].gender === 'male') {
    previous += current[1].age;
  }
  return previous;
}, 0);

console.log(sum);

//q6


let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(element => {
  console.log(`${element[0]} is a ${element[1].age}-year-old ${element[1].
    gender}`);
});

//q7
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

//a = 2; primitive value, can't be changed
// b= [3, 8]

//q8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
const vowels = ['a', 'e', 'i', 'o', 'u']; //could also use vowels = 'aeiou'
                                          //.includes is also a string method

Object.values(obj).forEach(element => {
  return element.forEach(word => {
    return word.split('').forEach(letter => {
      if (vowels.includes(letter)) {
        console.log(letter);
      }
    });
  });
});

//q9
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(array => {
  if (typeof array[0] === 'number') {
    return array.slice().sort((a,b) => a - b);
  } else {
    return array.slice().sort();
  }
});

console.log(newArr);

//slice should be used to obtain a copy of the subarray since sort is a
//destructive operation and we don't want to mutate the subarrays.

//q10
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(array => {
  if (typeof array[0] === 'number') {
    return array.slice().sort((a,b) => b - a);
  } else {
    return array.slice().sort((a,b) => {
      if (a < b) {
        return 1;
      } else { //no words are equal in the arrays, so left out this case
        return -1;
      }
    });
  }
});

console.log(newArr);

/* you can alternatively write
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]*/


//q11
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let array = arr.map(element => {
  let copyOfItem = Object.assign({}, element);
  Object.keys(element).forEach(item => {
    copyOfItem[item] = element[item] + 1;
  });
  return copyOfItem;
});

console.log(array);
console.log(arr);

//q12
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArray = arr.map (array => {
  return array.filter(element => element % 3 === 0);
});

console.log(newArray);

//q13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newSort = arr.slice().sort((a,b) => {
  let aSum = a.reduce((prev, current) => {
    if (current % 2 === 1) {
      prev += current;
    }
    return prev;
  }, 0);
  let bSum = b.reduce((prev, current) => {
    if (current % 2 === 1) {
      prev += current;
    }
    return prev;
  }, 0);

  return aSum - bSum;
});

console.log(newSort);
console.log(arr);

//shorter solution:
/*arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});*/


//q14
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let array = [];

for (let key in obj) {
  if (obj[key].type === 'fruit') {
    let capitalWord = obj[key].colors.map(word => word[0].toUpperCase() + word.
      slice(1));
    array.push(capitalWord);
  } else {
    array.push(obj[key].size.toUpperCase());
  }
}

console.log(array);

//return value: [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"],
//"LARGE"]

//another solution:
/*let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});*/

//q15
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let helloArray = arr.filter(item => {
  let hello = Object.values(item).map(subArray => {
    return subArray.every(value => value % 2 === 0);
  });
  return !hello.includes(false);
});

console.log(helloArray);

//better way of doing this:
//arr.filter(obj => {
//  return Object.values(obj).every(subArr => {
//    return subArr.every(num => num % 2 === 0);
//  });
//});

//q16
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let hello = Object.fromEntries(arr);
console.log(hello);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//q17
//Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the
//letters a-f) represented as a string. The value is typically broken into 5
//sections in an 8-4-4-4-12 pattern, e.g.
//'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

function generateUUID() {
  let availableChars = '0123456789abcdef'.split('');
  let arrayUUID = [['01234567'],['1234'],['1234'],['1234'],['012345678912']];

  function randomChar() {
    let char =
      availableChars[Math.floor(Math.random() * availableChars.length)];
    return char;
  }

  let stringUUID = arrayUUID.map(element => {
    return element.map(subArray => {
      let modifiedSubArray = subArray.split('').map(char => {
        char = randomChar();
        return char;
      });
      return modifiedSubArray.join('');
    });
  });


  return stringUUID.join('-');
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());