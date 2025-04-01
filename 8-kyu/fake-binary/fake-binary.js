function fakeBin(x) {
  let binArr = x.split('');
  
  let transformedArr = binArr.map(char => {
    return parseInt(char) < 5 ? '0' : '1'; 
  });
  
  return transformedArr.join('');
}
​