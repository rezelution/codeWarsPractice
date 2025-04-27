function deleteNth(arr, n) {
  let result = [];
  let counts = {};
​
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
​
    if (!counts[num]) {
      counts[num] = 1;
      result.push(num);
    } else if (counts[num] < n) {
      counts[num]++;
      result.push(num);
    }
  }
​
  return result;
}