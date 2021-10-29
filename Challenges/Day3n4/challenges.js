// Section 5 - Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Understand the problem
// 1. Array of temperatures is given.
// 2. display String

//  break it up into sub-problems!
// 1. create function 'printForecast'
// 2. log the string

function printForecast(arr) {
  const temps = arr;
  for (let i = 0; i < temps.length; i++) {
    console.log(`${temps[i]}ºC in ${i + 1} day...`);
  }
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);