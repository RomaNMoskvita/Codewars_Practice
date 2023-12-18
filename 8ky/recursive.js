function permutations(string) {
  if (string.length === 1) {
    // Base case: if the string has only one character, return an array containing that character
    return [string];
  } else {
    // Recursive case: generate permutations for the substring without the first character
    const permsWithoutFirst = "";
    return permsWithoutFirst + permutations(string.slice(1));
  }
}

console.log(permutations("fghjk"));
