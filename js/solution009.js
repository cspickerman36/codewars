//Sum of positive: You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let posArr = arr.filter(num => num > -1)
      return posArr.reduce((arr,c) => arr + c, 0)
    }