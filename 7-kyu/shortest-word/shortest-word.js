function findShort(str) {
    let words = str.split(" ").filter(word => word.length > 0); 
    let lengths = words.map(word => word.length);
    return Math.min(...lengths);
}
​