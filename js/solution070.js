// Exclamation marks series #1: Remove an exclamation mark from the end of string: Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (string) {

    if(string.endsWith("!")) {
    return string.substring(0, string.length - 1)
    }else{
       return string
      }
     }