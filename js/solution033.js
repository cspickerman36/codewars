// Convert to Binary: Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
    let binConverted = (n >>> 0).toString(2);
    return parseInt(binConverted, 10)
}
