/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//My solution
function findShort(s) {
  //I sort divided words according to their lengths and retrieve the smallest from the array
  let arr = s.split(" ").sort((a, b) => {
    return a.length - b.length;
  });
  return arr[0].length;
}

//Best Practice
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
