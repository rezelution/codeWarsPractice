function findNeedle(haystack) {            //defines the function to take one input, a list named 'haystack'
    for (let i = 0; i < haystack.length; i++) //this loops through each item in a list named 'haystack'
    {if (haystack[i] === 'needle') {                             //it looks of any item is equal to 'needle'
      return `found the needle at position ${i}`;               //it returns in which index/positon it finds the 'needle' 
  }
           }
}
