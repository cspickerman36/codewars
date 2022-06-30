// To square(root) or not to square(root): Write a method, that will get an integer array as parameter and will process every number from this array.

function squareOrSquareRoot(array) {
  
    let newArray = []
     
    array.forEach(element => {
       if(Math.sqrt(element) % 1 === 0) {
         newArray.push(Math.sqrt(element))
       }else{
          newArray.push(element*element)
       }         
    });
    
    return newArray
  }

