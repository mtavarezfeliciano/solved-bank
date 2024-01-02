// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let finalArr = [];
  let firstArray = []; //names with A
  let otherArray = []; //names with no A

  for (let i = 0; i < array.length; i++) {
    let hasA;

    for (let x = 0; x < array[i].length; x++) {
      if (array[i][x] == 'a') {
        hasA = true;
      }
    }
    if (hasA) {
      firstArray.push(array[i])
    } else {
      otherArray.push(array[i])
    }
    finalArr = [firstArray, otherArray];
  }
  return finalArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
