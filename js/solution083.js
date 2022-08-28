//CSV representation of array: Create a function that returns the CSV representation of a two-dimensional numeric array.

function toCsvText(array) {
    return array.map(row => row.join(',')).join('\n')
 }
