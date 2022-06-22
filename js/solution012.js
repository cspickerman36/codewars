//Square(n) Sum: Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(arr){
    let arrSquared = arr.map(x => x * x)
    return arrSquared.reduce((acc,c)=> acc + c, 0)
    }