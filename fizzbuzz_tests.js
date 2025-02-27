///////// fizzbuzz tests ////////

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
