function sortArray(array) {
  const oddNum = [];
​
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num % 2 !== 0) {
      oddNum.push(num);
    }
  }
​
  oddNum.sort((a, b) => a - b);
​
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]); 
    } else {
      result.push(oddNum.shift());
    }
  }
​
 
  return result;
}
​