/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/

//My solution
function permutations(string) {
  if (string.length === 1) {
    // Base case: if the string has only one character, return an array containing that character
    return [string];
  } else {
    // Recursive case: generate permutations for the substring without the first character
    const permsWithoutFirst = permutations(string.slice(1));

    // Initialize an empty array to store the result
    const result = [];

    // Loop through each permutation without the first character
    for (const perm of permsWithoutFirst) {
      // Insert the first character at every position in the permutation
      for (let i = 0; i <= perm.length; i++) {
        result.push(perm.slice(0, i) + string[0] + perm.slice(i));
      }
    }

    // Use a Set to remove duplicates and return the result as an array
    return [...new Set(result)];
  }
}

//Best Practice

function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split("")
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}
