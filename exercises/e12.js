
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  
  let overHundred = []; // empty array for answer

  for (let i = 0; i < array.length; i++) { //loop through array
    if (array[i].deposits ){ // check to see if deposits is real lol
      for (let x = 0; x < array[i].deposits[x]; x++) { // loop through deposits
        if (array[i].deposits[x] > 100) { // if value over 100 in deposits array then
          overHundred.push(array[i].deposits[x]); //push into empty array answer
        }
      }
    }
  }
  return overHundred; //returns answer
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
