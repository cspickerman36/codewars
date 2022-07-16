// Array plus array: I want to get the sum of two arrays

function arrayPlusArray(arr1, arr2) {
    const combined = arr1.concat(arr2);
      let sum = combined.reduce((acc,c)=>acc+c,0)
      return sum
    }