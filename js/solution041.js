// Vowel Count: Return the number (count) of vowels in the given string.

function getCount(str) {
    let vowelsCount = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
              vowelsCount += 1;
          }
      }
      return vowelsCount;
  }