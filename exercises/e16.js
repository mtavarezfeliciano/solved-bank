
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
  let flattened = [];
  //[['d', 'r'], 'z', 'b', ['f', 'y']];

  for (let i = 0; i < array.length; i++) { // go through first part of array 
    if (Array.isArray(array[i])) { // if its an array, continue going through others
      for (let x = 0; x < array[i].length; x++) { // loop through the next set of arrays inside array
        flattened.push(array[i][x]); // push those nested arrays first, working backwards
      }
    } else { // then push the first array
      flattened.push(array[i]);
    }
  }
  return flattened;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
