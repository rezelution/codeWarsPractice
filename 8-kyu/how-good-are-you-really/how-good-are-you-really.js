function betterThanAverage(classPoints, yourPoints) {
 const sum = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue);
 const average = (sum + yourPoints) / (classPoints.length + 1) 
  if(average < yourPoints){
    return true 
    } else {
      return false
    }
  
}
​
​
​