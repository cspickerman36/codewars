// N-th Power: You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n){
    const value = array[n]
    
    if (value == null){
      return -1
    }else{
      return value**n
    }
    }
