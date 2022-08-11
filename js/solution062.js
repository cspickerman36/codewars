// Abbreviate a Two Word Name: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name){

    let result = "";
     var tokens = name.split(/\s/);
     for(var i =0; i < tokens.length; i++){
       result += tokens[i].substring(0,1).toUpperCase()  + "."
       
   }
     return result.slice(0, -1)
   }