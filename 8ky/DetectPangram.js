/*
DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//My solution
function isPangram(string) {
  //Convert the given string to uppercase letters
  let upperIsPangram = string.toUpperCase();

  //Create a new string with the alphabet
  let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //check each letter from the alphabet to see if it is present in the given string.
  for (let i = 0; i < alf.length; i++) {
    if (upperIsPangram.search(alf.charAt(i)) !== -1) {
      //If at least one is not found, I return false.
    } else {
      return false;
    }
  }
  return true;
}

//Best Practices
function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}
