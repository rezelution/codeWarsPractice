function count(string) {
  const results = {};  
  
  for (let i = 0; i < string.length; i++) {  
    const char = string[i];  
    
    if (results[char]) {  
      results[char] += 1;  
    } else {
      results[char] = 1;  
    }
  }
  
  return results;  
}
​