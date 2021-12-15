
//q1
function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * 60);
  let seconds = Math.floor((((angle - degrees) * 60) - minutes) * 60);

  if (String(minutes).length === 1) {
    minutes = '0' + String(minutes);
  }

  if (String(seconds).length === 1) {
    seconds = '0' + String(seconds);
  }

  return `${degrees}˚${minutes}'${seconds}"`;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


//q2
function union(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  newArray.sort((a, b) => a - b);

  return newArray.filter((element, index) =>
    element !== newArray[index + 1]);
}
console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([1, 3, 5], [1, 3, 5]));
console.log(union([1, 3, 5], [2, 6, 8]));


//q3
function halvsies(arr) {
  let size = arr.length;
  let finalArray = [[], []];
  let half = Math.ceil(size / 2);

  arr.reduce((prev, current, index) => {
    if (index < half) {
      prev[0].push(current);
    } else {
      prev[1].push(current);
    }
    return prev;
  }, finalArray);

  return finalArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
console.log(halvsies([1, 2, 3, 4, 5, 6, 7]));


//q4
function findDup(arr) {
  let copy = arr.slice();
  let dup = 0;

  copy.sort((a,b) => a - b);

  copy.forEach((elem, index) => {
    if (elem === copy[index + 1]) {
      dup = elem;
    }
  });
  return dup;
}


findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);
         

//q5
function interleave(arr1, arr2) {
  let newArray = [];

  arr1.forEach((elem, index) => {
    newArray.push(elem, arr2[index]);
  });
  console.log(newArray);
  return newArray;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]


//q6
function multiplicativeAverage(arr) {
  let multiply = arr.reduce((a, b) => a * b);

  let divide = multiply / (arr.length);

  return divide.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


//q7
function multiplyList(arr1, arr2) {
  let newArray = arr1.reduce((prev, current, index) => {
    prev.push(current * arr2[index]);
    return prev;
  }, []);
  return newArray;
}
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]


//q8
function digitList(num) {
  let str = String(num).split('');

  let arr = str.map(element => parseInt(element, 10));
  return arr;
}
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]



//q9
function countOccurrences(obj) {
  let values = Object.values(obj);

  let vehicles = values.reduce((prev, current) => {
    if (prev[current] === undefined) {
      prev[current] = 1;
    } else {
      prev[current] += 1;
    }
    return prev;
  }, {});

  for (let key in vehicles) {
    console.log(`${key} => ${vehicles[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
//car => 4
//truck => 3
//SUV => 1
//motorcycle => 2



//q10
function average(arr) {
  let total = arr.reduce((prev, current) => prev + current);

  return Math.floor(total / arr.length);

}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40


//q11
function timeOfDay(minutes) {
  const HOURS_IN_A_DAY = 24;
  const MINUTES_IN_AN_HOUR = 60;
  let hour = Math.floor(Math.abs(minutes) / MINUTES_IN_AN_HOUR);
  let remainder = 0;
  
  if (Math.abs(minutes) < MINUTES_IN_AN_HOUR) {
    return clockTime(hour, minutes);
  }
  

  let adjustedHour = Math.abs(minutes);
  if (hour > HOURS_IN_A_DAY) {
    remainder = Math.abs(minutes) -
    (hour * MINUTES_IN_AN_HOUR);

    adjustedHour = hour - (Math.floor(hour / HOURS_IN_A_DAY) * HOURS_IN_A_DAY);
  } else {
    remainder = adjustedHour - (hour * MINUTES_IN_AN_HOUR);
    adjustedHour = hour;
  }

  if (minutes < 0) {
    adjustedHour *= -1;
  }

  return clockTime(adjustedHour, remainder);


}


function clockTime(hr, min) {
  let finalHr = 0;
  let finalMin = 0;
  if (hr >= 0 && min >= 0) {
    finalHr = hr;
    finalMin = min;
  } else {
    finalHr = 23 - Math.abs(hr);
    finalMin = 60 - Math.abs(min);
  }
  let finalHrStr = String(finalHr);
  let finalMinStr = String(finalMin);

  if (finalHrStr.length === 1) {
    finalHrStr = '0'.concat(finalHrStr);
  }

  if (finalMinStr.length === 1) {
    finalMinStr = '0'.concat(finalMinStr);
  }
  return `${finalHrStr}:${finalMinStr}`;

}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");


//q12
function beforeMidnight(time) {
  const MINUTES_IN_AN_HOUR = 60;
  let arr = time.split(':');
  let hour = Number(arr[0]);
  let min = Number(arr[1]);

  let total = (hour * MINUTES_IN_AN_HOUR) + min;
  return (1440 - total) % 1440;

}
function afterMidnight(time) {
  const MINUTES_IN_AN_HOUR = 60;
  const MINUTES_IN_A_DAY = 1440;
  let [hour, min] = time.split(':').map(elem => Number(elem));

  let total = (hour * MINUTES_IN_AN_HOUR) + min;

  return total % MINUTES_IN_A_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
