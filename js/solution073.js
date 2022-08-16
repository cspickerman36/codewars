// Contamination #1 -String-: If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!!

function contamination(text, char){
    return char.repeat(text.length)
   }