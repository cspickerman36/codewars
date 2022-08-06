// Merge two sorted arrays into one: You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order.

function mergeArrays(arr1, arr2) {
    const children = arr1.concat(arr2);
    const removeDup=  [...new Set(children)];
    return removeDup.sort(function(a,b){return a - b})
  }