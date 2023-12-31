// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let sums = []; //make answer array empty
  for (let i = 0; i < array.length; i++) {
    //first for loop of array (bank accounts)
    let totals = 0; /*create total variable at 0 which will restart at 0 after every iteration*/
    if (array[i].deposits) {
      //if bank accounts exist
      for (let x = 0; x < array[i].deposits.length; x++) {
        //2nd for loop through the deposits array for the total
        if (array[i].deposits[x]) {
          totals += array[i].deposits[x]; //add together to total variable
        }
      }
    } if (totals < 2000) {
        //if total < 2000
        sums.push(array[i]);
    }
  }
  return sums; // return arrays
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
