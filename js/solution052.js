// Power: The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
    var total = 1;
    for (var i = 1; i <= power; i++) { 
      total = total * number;
    }
    return total;
  }