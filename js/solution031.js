// Plural: We need a simple function that determines if a plural is needed or not.

function numberToPower(number, power){
    var total = 1;
    for (var i = 1; i <= power; i++) { 
      total = total * number;
    }
    return total;
  }
