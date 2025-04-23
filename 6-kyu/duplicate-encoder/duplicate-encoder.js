function duplicateEncode(word){
  const characterCount = {};
  const lowerCase = word.toLowerCase();
  const duplicateChar = [];
​
​
  lowerCase.split('').forEach(char => {
    if (characterCount[char]) {
      characterCount[char] += 1;
    } else {
      characterCount[char] = 1;
    }
  });
​
​
  lowerCase.split('').forEach(char => {
    duplicateChar.push(characterCount[char] > 1 ? ')' : '(');
  });
​
  return duplicateChar.join('');
}
​