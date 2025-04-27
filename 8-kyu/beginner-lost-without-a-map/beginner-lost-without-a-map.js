function maps(x) {                          // Define a function named 'maps' that takes one input: an array 'x'
  return x.map((item) => {               // Use the .map() method to create a new array by transforming each item
    return item * 2;                      // For each 'item' in the array, multiply it by 2 and return the result
  });
}
​

//The function takes an array x as input, and then uses .map() with an arrow function to go through each item in the array, 
//multiply it by 2, and return a new array with those doubled values.

//below is rewriting the above as a for loop

function maps(x) {
  let result = [];                   // Create an empty array to hold the doubled numbers
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2);           // Multiply each item by 2 and push it to the result array
  }
  return result;                     // Return the new array with doubled values
}
