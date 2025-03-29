function sum (numbers) {
let sum = 0;
  if (numbers.length === 0) {
    return 0
  };
  
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
​
​