//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

//Task1
const greaterThan = numbers.filter((number) => number >= 25);
//Task2
const divisableBy = numbers.filter((number) => number % 5 === 0);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

//Task3
const squared = numbers.map((number) => number * number);
//Task4
const multipliedBy = numbers.map((number) => number * 2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

//Task5
const greaterThanSquared = numbers
  .filter((number) => number >= 20)
  .map((number) => number * number);

//Task6
const divisableByMultiplied = numbers
  .filter((number) => number % 5 === 0)
  .map((number) => number * 3);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

function logger(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

function toCelsius(temperatures) {
  return temperatures.map((temperature) => (temperature - 32) * (5 / 9));
}

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

function hottestDays(temperatures, threshhold) {
  return temperatures.filter((temperature) => temperature > threshhold);
}

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

function logHottestDays(temperatures, threshhold) {
  logger(hottestDays(toCelsius(temperatures), (threshhold - 32) * (5 / 9)));
}
