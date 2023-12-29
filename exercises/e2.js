// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

//every number needs to be checked 
//if it checks out a number that has a sqrt, then push it 

export function getNumbersWithSquareRoots(max) {
  let sqrArr = [];
  for (let i = 0; i < max; i++) {
    if ((Math.sqrt(i) % 1) == 0) {
      sqrArr.push(i);
    }
  }
  return sqrArr;
}
let finalArr = [];
finalArr.push(getNumbersWithSquareRoots(17));

console.log(finalArr);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
