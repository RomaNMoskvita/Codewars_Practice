/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//My solution
function duplicateCount(text) {
  const duplicates = [];
  const charCount = {};

  for (let x of text.toUpperCase()) {
    //retrieves the current count of the character char from the charCount object
    //logical OR operator checks if charCount[char] is truthy.
    charCount[x] = (charCount[x] || 0) + 1;
    console.log(charCount);
    if (charCount[x] === 2) {
      duplicates.push(x);
    }
  }
  return duplicates.length;
}

console.log(duplicateCount("aabBcde"));
