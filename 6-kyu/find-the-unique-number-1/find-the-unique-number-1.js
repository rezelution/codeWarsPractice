function findUniq(arr) {
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
    
   
    if (a === b) {
        
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== a) return arr[i];
        }
    }
   
    else if (a === c) {
        return b; 
    } else {
        return a; 
    }
}
​