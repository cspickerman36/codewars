//Palindrome strings: Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function isPalindrome(line) {
    let str = line.toString()
  return str == str.split('').reverse().join('');
  }

  