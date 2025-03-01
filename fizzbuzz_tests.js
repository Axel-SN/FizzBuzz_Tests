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

/*
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

// for loop to iterate through numbers
for (let i = 0; i < 31; i++) {
  // create an array to collect the words based on the conditions, to print out at the end
  const words = [];

  // for.. of loop to iterate through the conditions of fizzbuzzMap, that should break and stop once any condition fits
  for (let [condition, word] of fizzbuzzMap) {
    if (condition(i)) {
      words.push(word);
      break;
    }
  }

  // for.. of loop to iterate through the conditions of bratwurstMap, and adding them onto the current log
  for (let [condition, word] of bratwurstMap) {
    if (condition(i)) {
      words.push(word);
    }
  }

  // if logger has content, print it, otherwise print i
  if (words.length > 0) {
    // join everything in the array to print it out as one word
    console.log(words.join(""));
  } else {
    // print i
    console.log(i);
  }
}
*/

// testing code efficency from outside help:

function measureExecutionTime(label, func) {
  const start = performance.now();
  func();
  const end = performance.now();
  console.log(`${label} took ${(end - start).toFixed(4)} ms`);
}

// Original approach (using Map & for loops)
function originalApproach() {
  const fizzbuzzMap = new Map([
    [(i) => i % 3 == 0 && i % 5 == 0, "fizzbuzz"],
    [(i) => i % 3 == 0, "fizz"],
    [(i) => i % 5 == 0, "buzz"],
  ]);

  const bratwurstMap = new Map([
    [(i) => i % 6 == 0, "brat"],
    [(i) => i % 9 == 0, "wurst"],
  ]);

  const results = [];

  for (let i = 1; i <= 100000; i++) {
    const words = [];

    for (let [condition, word] of fizzbuzzMap) {
      if (condition(i)) {
        words.push(word);
        break;
      }
    }

    for (let [condition, word] of bratwurstMap) {
      if (condition(i)) words.push(word);
    }

    results.push(words.length > 0 ? words.join("") : i);
  }

  //console.log(results.length); // Ensure the loop actually runs
}

// Optimized approach (direct if-conditions)
function optimizedApproach() {
  for (let i = 1; i <= 100000; i++) {
    let div3 = i % 3 === 0;
    let div5 = i % 5 === 0;
    let div6 = i % 6 === 0;
    let div9 = i % 9 === 0;

    let output = "";

    if (div3 && div5) output = "fizzbuzz";
    else if (div3) output = "fizz";
    else if (div5) output = "buzz";

    if (div6) output += "brat";
    if (div9) output += "wurst";

    //console.log(output || i);
  }
}

// Run benchmarks
measureExecutionTime("Original Approach", originalApproach);
measureExecutionTime("Optimized Approach", optimizedApproach);
