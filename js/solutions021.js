//Check same case: Write a function that will check if two given characters are the same case.

function sameCase(a, b){
  
    if ( a.toUpperCase() == a.toLowerCase() || b.toUpperCase() == b.toLowerCase() ){
      return -1
     }else if (a.toUpperCase() === a && b.toUpperCase() === b){
      return 1
    }else if(a.toLowerCase() === a && b.toLowerCase() === b){
      return 1
     } else{
       return 0 
       }
    }