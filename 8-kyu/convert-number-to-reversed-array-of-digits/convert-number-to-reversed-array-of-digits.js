function digitize(n) {
  let stringVersion = n.toString();           
  let digitsArray = stringVersion.split('');  
  let reversedArray = digitsArray.reverse();  
  let numberArray = reversedArray.map(Number); 
  return numberArray;  
}
​