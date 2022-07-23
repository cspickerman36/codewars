// Are You Playing Banjo?: Create a function which answers the question "Are you playing banjo?".

function areYouPlayingBanjo(name) {
    let lowerName = name.toLowerCase()
   
    if (lowerName.charAt(0) === "r"){
      return `${name} plays banjo`;
    }else{
     return `${name} does not play banjo`
   }
   }