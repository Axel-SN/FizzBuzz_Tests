///////// fizzbuzz tests ////////

/* 
let logOut1 = "for i=";
let logOut2 = " -> ";
let logOut3 = "";

for (let i = 0; i < 31; i++) {
  logOut3 = "";
  if (i % 3 == 0 && i % 5 == 0) {
    logOut3 = "fizzbuzz";
  } else if (i % 3 == 0) {
    logOut3 = "fizz";
  } else if (i % 5 == 0) {
    logOut3 = "buzz";
  } else {
    logOut3 = i;
  }
  if (i % 6 == 0) {
    logOut3 += "brat";
  }
  if (i % 9 == 0) {
    logOut3 += "wurst";
  }
  console.log(logOut1 + i + logOut2 + logOut3);
}

// to do
// make code more efficient
// look up dictionary/hashmap
// look for further improvements

*/

// Map approach

// Objective: iterate through a for-loop and check conditions to print out specific words. After the first set of conditions was checked, check another set of conditions and add its words to the final String that gets printed out. In case no condition holds true, just print out the iterator of the for-loop.

// checks for various conditions with words to print depending on the input
const fizzbuzzMap = new Map([
  [(i) => i % 3 == 0 && i % 5 == 0, "fizzbuzz"],
  [(i) => i % 3 == 0, "fizz"],
  [(i) => i % 5 == 0, "buzz"],
]);

// map for additional conditions which should be checked after fizzbuzzMap and words that are supposed to be added along after checking fizzbuzzMap
const bratwurstMap = new Map([
  [(i) => i % 6 == 0, "brat"],
  [(i) => i % 9 == 0, "wurst"],
]);

// variable to save the final String to log to the console after checking both fizzbuzzMap and bratwurstMap
let logger = "";

// for loop to iterate through numbers
for (let i = 0; i < 31; i++) {
  let breaker = false;
  logger = "";

  // for.. of loop to iterate through the conditions of fizzbuzzMap, that should break and stop once any condition fits
  for (let [condition, word] of fizzbuzzMap) {
    if (condition(i)) {
      logger += word;
      breaker = true;
      break;
    }
  }

  // for.. of loop to iterate through the conditions of bratwurstMap, and adding them onto the current log
  for (let [condition, word] of bratwurstMap) {
    if (condition(i)) {
      logger += word;
    }
  }

  // if no condition of fizzbuzzMap or bratwurstMap held true for i, then only print out i. Otherwise print out the final String
  if (!breaker) {
    console.log(i);
  } else {
    console.log(logger);
  }
}
